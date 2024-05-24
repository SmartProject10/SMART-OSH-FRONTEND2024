export const COOKIE_MAX_AGE_1_YEAR = 365 * 24 * 60 * 60

export const AUDIT_PARTNER = {
  MENU: {
    spanish: {
      home: 'Implementar Sistema de Gestión'
    },
    english: {

    }
  },
  LOGIN_TEXT: {
    spanish: {
      title: 'Bienvenido !',
      email: 'Celular o Correo',
      password: 'Contraseña',
      remember: 'Recordarme',
      forgotPassword: 'Olvidaste tu contraseña ?',
      forgotEmail: 'Olvidaste tu correo ?',
      login: 'Iniciar sesión',
      accountText: "No tienes cuenta ?",
      createAccount: 'Crea una cuenta'

    },
    english: {

    }
  },
  REGISTER: {
    spanish: {
      title: 'Crea tu Cuenta',
      names: 'Nombres',
      lastName: 'Apellidos',
      email: 'Correo',
      password: 'Contraseña',
      repeatPassword: 'Repetir contraseña ?',
      phone: 'Número de celular móvil',
      country: 'País',
      createAccount: 'Crear Cuenta',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      signInInstead: 'Inicia sesión en su lugar'
    },
    english: {

    }
  },
  REDIRECT_ROUTER: {
    login: '/Auth/AuditPartner/login',
    register: '/Auth/AuditPartner/register'
  }
}
