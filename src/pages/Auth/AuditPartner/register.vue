<script setup lang="ts">
import { ref } from 'vue'
import { VForm } from 'vuetify/components/VForm'

import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'

import authV2RegisterIllustrationBorderedDark from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2RegisterIllustrationBorderedLight from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'

import { registerService } from '@/services/Auth/AuditPartner/register'
import logo from '@images/pages/logo_2sinfondo.png'
import { AUDIT_PARTNER, ar_countries } from "../../../../src/utils/constants"

const imageVariant = useGenerateImageVariant(authV2RegisterIllustrationLight,
  authV2RegisterIllustrationDark,
  authV2RegisterIllustrationBorderedLight,
  authV2RegisterIllustrationBorderedDark, true)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const router = useRouter();
const requiredValidator = (value: any) => {
  return !!value || 'Este campo es obligatorio';
};

const documentLengthValidator = (value: any) => {
  return value.length === 15 || 'El documento debe tener exactamente 15 dígitos';
};

const numberphoneLengthValidator = (value: any) => {
  return value.length === 15 || 'El numero movil debe tener exactamente 15 dígitos';
};
const refVForm = ref<VForm>()

const form = ref({
  persona_id: '',
  nombre: '',
  apellido: '',
  correo: '',
  telefono: '',
  contrasena: '',
  repeatPassword: '',
  country: '',
  document: '',
  usuario: '',
  celular: '',
  direccion: '',
  bank_account: '',
  bank: '',
  imagen_firma: '',
  administrador: '',
  privacyPolicies: false,
  requiredValidator: requiredValidator
})

const isPasswordVisible = ref(false)

const register = async () => {
  try {
    const data = {
      persona_id: 1,
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      correo: form.value.correo,
      contrasena: form.value.contrasena,
      document: form.value.document,
      usuario: form.value.usuario,
      celular: form.value.celular,
      country: form.value.country,
      direccion: form.value.direccion,
      bank_account: form.value.bank_account,
      bank: form.value.bank,
      sesion_activa: true,
      imagen_firma: 'aW1hZ2VfYnl0ZXNfZGF0YQ==',
      administrador: 1,
    }
    const response = await registerService(data);
    await nextTick(() => {
      router.push(AUDIT_PARTNER.REDIRECT_ROUTER.login)
    })
  } catch (error) {

  }
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        register()
    })

}

</script>
<template>
  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <VImg max-width="213" :src="logo" class="auth-logo d-flex align-center gap-x-3" />
        <div class="d-flex align-center justify-center w-100 h-100" style="padding-inline: 100px;">
          <VImg max-width="500" :src="imageVariant" class="auth-illustration mt-16 mb-2" />
        </div>

        <img class="auth-footer-mask" :src="authThemeMask" alt="auth-footer-mask" height="280" width="100">
      </div>
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: rgb(var(--v-theme-surface));">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">
            {{ AUDIT_PARTNER.REGISTER.spanish.createAccount }} 🚀
          </h4>
        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- nombre -->
              <VCol cols="12">
                <AppTextField v-model="form.nombre" :rules="[requiredValidator]" autofocus
                  :label="AUDIT_PARTNER.REGISTER.spanish.names" type="text" placeholder="John" />
              </VCol>
              <!-- apellido -->
              <VCol cols="12">
                <AppTextField v-model="form.apellido" :rules="[form.requiredValidator]" autofocus
                  :label="AUDIT_PARTNER.REGISTER.spanish.lastName" type="text" placeholder="Doe" />
              </VCol>

              <!-- correo -->
              <VCol cols="12">
                <AppTextField v-model="form.correo" :rules="[requiredValidator, emailValidator]"
                  :label="AUDIT_PARTNER.REGISTER.spanish.email" type="correo" placeholder="johndoe@correo.com" />
              </VCol>

              <!-- country -->
              <VCol cols="12">
                <VSelect clearable v-model="form.country"
                  :items="ar_countries"
                  :rules="[requiredValidator]" :label="AUDIT_PARTNER.REGISTER.spanish.country"
                  placeholder="Seleccione" item-text="text" item-value="value" />
              </VCol>

              <!-- documento identidad -->
              <VCol cols="12">
                <AppTextField v-model="form.document" :rules="[requiredValidator, documentLengthValidator]" autofocus
                  :label="AUDIT_PARTNER.REGISTER.spanish.document" type="number" placeholder="00000" />
              </VCol>

              <!-- numero movil -->
              <VCol cols="12">
                <AppTextField v-model="form.celular" :rules="[requiredValidator]" autofocus
                  :label="AUDIT_PARTNER.REGISTER.spanish.phone" type="number" placeholder="00000" />
              </VCol>

              <!-- BANCO -->
              <VCol cols="12">
                <AppTextField v-model="form.bank" :rules="[requiredValidator]" autofocus
                  :label="AUDIT_PARTNER.REGISTER.spanish.bank" type="text" placeholder="00000" />
              </VCol>

              <!-- Cuenta bancaria -->
              <VCol cols="12">
                <AppTextField v-model="form.bank_account" :rules="[requiredValidator]" autofocus
                  :label="AUDIT_PARTNER.REGISTER.spanish.bank_account" type="number" placeholder="00000" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField v-model="form.contrasena" :rules="[requiredValidator]"
                  :label="AUDIT_PARTNER.REGISTER.spanish.password" placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />
              </VCol>
              <VCol cols="12">
                <AppTextField v-model="form.repeatPassword" :rules="[requiredValidator]"
                  :label="AUDIT_PARTNER.REGISTER.spanish.repeatPassword" placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />
              </VCol>
              <VCol cols="12">
                <VBtn block type="submit">
                  {{ AUDIT_PARTNER.REGISTER.spanish.createAccount }}
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-center text-base">
                <span class="d-inline-block">{{ AUDIT_PARTNER.REGISTER.spanish.alreadyHaveAccount }}</span>

                <RouterLink class="text-primary ms-1 d-inline-block" :to="{ name: 'auth-audit-partner-login' }">
                  {{ AUDIT_PARTNER.REGISTER.spanish.signInInstead }}
                </RouterLink>

              </VCol>

              <VCol cols="12" class="d-flex align-center">
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol cols="12" class="text-center">
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>

    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
