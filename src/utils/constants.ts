const COOKIE_MAX_AGE_1_YEAR = 365 * 24 * 60 * 60

const AUDIT_PARTNER = {
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
      document: 'Documento',
      email: 'Correo',
      password: 'Contraseña',
      repeatPassword: 'Repetir contraseña ?',
      phone: 'Número de celular móvil',
      country: 'País',
      bank: 'Banco',
      bank_account: 'Cuenta de banco',
      createAccount: 'Crear Cuenta',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      signInInstead: 'Inicia sesión en su lugar'
    },
    english: {

    }
  },
  IMPLEMENT_ISO: {
    spanish: {
      ISO_numero: 'Ingrese la ISO a implementar',
      ISO_nombre: 'Ingrese otro sistema de gestion'
    },
    english: {

    }
  },
  REDIRECT_ROUTER: {
    login: '/Auth/AuditPartner/login',
    register: '/Auth/AuditPartner/register'
  }
}

const countries = [
  { text: 'Afganistán', value: 'af' }, { text: 'Albania', value: 'al' }, { text: 'Alemania', value: 'de' }, { text: 'Andorra', value: 'ad' },
  { text: 'Angola', value: 'ao' }, { text: 'Arabia Saudita', value: 'sa' }, { text: 'Argelia', value: 'dz' }, { text: 'Argentina', value: 'ar' },
  { text: 'Armenia', value: 'am' }, { text: 'Australia', value: 'au' }, { text: 'Austria', value: 'at' }, { text: 'Azerbaiyán', value: 'az' },
  { text: 'Bahamas', value: 'bs' }, { text: 'Bangladés', value: 'bd' }, { text: 'Barbados', value: 'bb' }, { text: 'Baréin', value: 'bh' },
  { text: 'Bélgica', value: 'be' }, { text: 'Belice', value: 'bz' }, { text: 'Benín', value: 'bj' }, { text: 'Bielorrusia', value: 'by' },
  { text: 'Birmania', value: 'mm' }, { text: 'Bolivia', value: 'bo' }, { text: 'Bosnia y Herzegovina', value: 'ba' }, { text: 'Botsuana', value: 'bw' },
  { text: 'Brasil', value: 'br' }, { text: 'Brunéi', value: 'bn' }, { text: 'Bulgaria', value: 'bg' }, { text: 'Burkina Faso', value: 'bf' },
  { text: 'Burundi', value: 'bi' }, { text: 'Bután', value: 'bt' }, { text: 'Cabo Verde', value: 'cv' }, { text: 'Camboya', value: 'kh' },
  { text: 'Camerún', value: 'cm' }, { text: 'Canadá', value: 'ca' }, { text: 'Catar', value: 'qa' }, { text: 'Chad', value: 'td' },
  { text: 'Chile', value: 'cl' }, { text: 'China', value: 'cn' }, { text: 'Chipre', value: 'cy' }, { text: 'Ciudad del Vaticano', value: 'va' },
  { text: 'Colombia', value: 'co' }, { text: 'Comoras', value: 'km' }, { text: 'Corea del Norte', value: 'kp' }, { text: 'Corea del Sur', value: 'kr' },
  { text: 'Costa de Marfil', value: 'ci' }, { text: 'Costa Rica', value: 'cr' }, { text: 'Croacia', value: 'hr' }, { text: 'Cuba', value: 'cu' },
  { text: 'Dinamarca', value: 'dk' }, { text: 'Dominica', value: 'dm' }, { text: 'Ecuador', value: 'ec' }, { text: 'Egipto', value: 'eg' },
  { text: 'El Salvador', value: 'sv' }, { text: 'Emiratos Árabes Unidos', value: 'ae' }, { text: 'Eritrea', value: 'er' }, { text: 'Eslovaquia', value: 'sk' },
  { text: 'Eslovenia', value: 'si' }, { text: 'España', value: 'es' }, { text: 'Estados Unidos', value: 'us' }, { text: 'Estonia', value: 'ee' },
  { text: 'Etiopía', value: 'et' }, { text: 'Filipinas', value: 'ph' }, { text: 'Finlandia', value: 'fi' }, { text: 'Fiyi', value: 'fj' },
  { text: 'Francia', value: 'fr' }, { text: 'Gabón', value: 'ga' }, { text: 'Gambia', value: 'gm' }, { text: 'Georgia', value: 'ge' },
  { text: 'Ghana', value: 'gh' }, { text: 'Granada', value: 'gd' }, { text: 'Grecia', value: 'gr' }, { text: 'Guatemala', value: 'gt' },
  { text: 'Guyana', value: 'gy' }, { text: 'Guinea', value: 'gn' }, { text: 'Guinea ecuatorial', value: 'gq' }, { text: 'Guinea-Bisáu', value: 'gw' },
  { text: 'Haití', value: 'ht' }, { text: 'Honduras', value: 'hn' }, { text: 'Hungría', value: 'hu' }, { text: 'India', value: 'in' },
  { text: 'Indonesia', value: 'id' }, { text: 'Irak', value: 'iq' }, { text: 'Irán', value: 'ir' }, { text: 'Irlanda', value: 'ie' },
  { text: 'Islandia', value: 'is' }, { text: 'Islas Marshall', value: 'mh' }, { text: 'Islas Salomón', value: 'sb' }, { text: 'Israel', value: 'il' },
  { text: 'Italia', value: 'it' }, { text: 'Jamaica', value: 'jm' }, { text: 'Japón', value: 'jp' }, { text: 'Jordania', value: 'jo' }
];

const ar_countries = [
  'Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bangladés', 'Barbados', 'Baréin', 'Bélgica', 'Belice', 'Benín', 'Bielorrusia', 'Birmania', 'Bolivia', 'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunéi', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Bután', 'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China', 'Chipre', 'Ciudad del Vaticano', 'Colombia', 'Comoras', 'Corea del Norte', 'Corea del Sur', 'Costa de Marfil', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos', 'Eritrea', 'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 'Fiyi', 'Francia', 'Gabón', 'Gambia', 'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guyana', 'Guinea', 'Guinea ecuatorial', 'Guinea-Bisáu', 'Haití', 'Honduras', 'Hungría', 'India', 'Indonesia', 'Irak', 'Irán', 'Irlanda', 'Islandia', 'Islas Marshall', 'Islas Salomón', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán', 'Kiribati', 'Kuwait', 'Laos', 'Lesoto', 'Letonia', 'Líbano', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Madagascar', 'Malasia', 'Malaui', 'Maldivas', 'Malí', 'Malta', 'Marruecos', 'Mauricio', 'Mauritania', 'México', 'Micronesia', 'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Omán', 'Países Bajos', 'Pakistán', 'Palaos', 'Palestina', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia', 'Portugal', 'Reino Unido', 'República Centroafricana', 'República Checa', 'República de Macedonia', 'República del Congo', 'República Democrática del Congo', 'República Dominicana', 'República Sudafricana', 'Ruanda', 'Rumanía', 'Rusia', 'Samoa', 'San Cristóbal y Nieves', 'San Marino', 'San Vicente y las Granadinas', 'Santa Lucía', 'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Siria', 'Somalia', 'Sri Lanka', 'Suazilandia', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 'Surinam', 'Tailandia', 'Tanzania', 'Tayikistán', 'Timor Oriental', 'Togo', 'Tonga', 'Trinidad y Tobago', 'Túnez', 'Turkmenistán', 'Turquía', 'Tuvalu', 'Ucrania', 'Uganda', 'Uruguay', 'Uzbekistán', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Yibuti', 'Zambia', 'Zimbabue'
];

export { AUDIT_PARTNER, COOKIE_MAX_AGE_1_YEAR, ar_countries, countries };

