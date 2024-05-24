import { useAuth } from "@/store/auth";

const errors = ref<Record<string, string | undefined>>({
  correo: undefined,
  contrasena: undefined,
})

const auth = useAuth();

export const  loginSession = async ( correo: string, contrasena: string) => {
  
  try {
    
    const response = await $api('login', {
      
      method: 'POST',
      body: {
        correo,
        contrasena,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
  
    const { data } = response;
    auth.setToken(data);
    auth.setUser(data);
    auth.setIsAuth(true);
  } catch (error) {
    throw new Error(`Error de autenticación ${error}`);
  }
}
