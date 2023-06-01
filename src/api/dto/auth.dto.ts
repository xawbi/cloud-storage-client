export interface LoginFormDTO {
  email: string
  password: string
}

export interface LoginResponseDTO {
  token: string
}

export type RegistrationFormDTO = LoginFormDTO & {
  fullName: string
}

export type RegistrationResponseDTO = LoginResponseDTO