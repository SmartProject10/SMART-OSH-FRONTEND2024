import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const router = useRouter()

const useAuth = defineStore('auth', () => {

  const token = ref(localStorage.getItem("accessToken"));
  const user = ref(JSON.parse(localStorage.getItem("accessToken") as any));
  const isAuth = ref(false);

  const setToken = (tokenValue: string | null) => {
    localStorage.setItem('accessToken', tokenValue as any);
    token.value = tokenValue;
  }

  const setUser = (userValue: any) => {
    localStorage.setItem('accessToken', JSON.stringify(userValue));
    user.value = userValue;
  }

  const setIsAuth = (auth: boolean) => {
    isAuth.value = auth;
  }

  const isAuthenticated = computed(() => {
      return token.value && user.value;
  })

  const fullName = computed(() => {
    if (user.value) {
      return user.value.firstName + ' ' + user.value.lastName;
    }
    return '';
  })

  const checkToken = async () => {
    try {
      const tokenAuth = 'Bearer ' + token.value;
      const { data } = await useApi("/auth/verify", {
        headers: {
          Authorization: tokenAuth,
        },
      });
      return data;
    } catch (error) {
      clear();
      router.push(AUDIT_PARTNER.REDIRECT_ROUTER.login);
      console.log('error checkToken', error);
    }
  }

  const clear = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessToken');
    isAuth.value = false;
    token.value = '';
    user.value = '';
  }

  const logout = () => {
    clear();
    window.location.href = AUDIT_PARTNER.REDIRECT_ROUTER.login
    // router.push(AUDIT_PARTNER.REDIRECT_ROUTER.login);
  }

  return {
    token,
    user,
    setToken,
    setUser,
    checkToken,
    isAuthenticated,
    fullName,
    clear,
    setIsAuth,
    isAuth,
    logout
  }

})

export { useAuth };

