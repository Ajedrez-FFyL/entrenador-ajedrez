// Tipos mínimos de Google Identity Services (cliente de token OAuth), cargado en runtime vía <script>.
// No hay @types oficiales livianos para esto; se declara solo lo que usa drive.ts.
declare namespace google.accounts.oauth2 {
  interface TokenResponse {
    access_token: string
    expires_in: number
    error?: string
  }

  interface TokenClientConfig {
    client_id: string
    scope: string
    callback: (resp: TokenResponse) => void
    error_callback?: (err: { message?: string }) => void
  }

  interface TokenClient {
    requestAccessToken(opciones?: { prompt?: 'consent' | 'select_account' | 'none' | '' }): void
  }

  function initTokenClient(config: TokenClientConfig): TokenClient
  function revoke(accessToken: string, callback: () => void): void
}
