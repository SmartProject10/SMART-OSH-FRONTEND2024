const errors = ref<Record<string, string | undefined>>({
  persona_id: undefined,
  names: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined,
  phone: undefined,
  nombre: undefined,
  apellido: undefined,
  correo: undefined,
  contrasena: undefined,
  document: undefined,
  usuario: undefined,
  celular: undefined,
  country: undefined,
  direccion: undefined,
  bank_account: undefined,
  bank: undefined,
  sesion_activa: undefined,
  imagen_firma: undefined,
  administrador: undefined
})

export interface registerData {
  persona_id: number,
  nombre: string,
  apellido: string,
  correo: string,
  contrasena: string,
  usuario: string,
  celular: string,
  telefono?: string,
  country?: string,
  document: string,
  direccion: string,
  bank_account: string,
  bank: string,
  sesion_activa: boolean,
  imagen_firma: string,
  administrador: number
}

export const registerService = async ( options : registerData ) => {
  try {
    const  {
      persona_id,
      nombre,
      apellido,
      correo,
      contrasena,
      usuario,
      celular,
      telefono,
      sesion_activa,
      direccion,
      imagen_firma,
      administrador
    } = options
    const response = await $api('users/register', {
      
      method: 'POST',
      body: {
        persona_id,
        nombre,
        apellido,
        telefono,
        celular,
        correo,
        contrasena,
        usuario,
        sesion_activa,
        direccion,
        imagen_firma,
        administrador
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })
  
    return response;
  } catch (error) {
    console.log('Register Error - ', error)
  }
}
