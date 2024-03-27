export class RegisterUserRequest {
    no_wa: string
    fullName: string
    password: string
}

export class UserResponse {
    no_wa: string
    fullName: string
    token?: string
}