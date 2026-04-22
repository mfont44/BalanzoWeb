# BalanzoWeb

Web promocional de Balanzo amb:
- Landing page a `/`
- Politica de privadesa a `/privacy-policy`
- Fitxers `.well-known` per smart links (Universal Links i App Links)

## Desenvolupament local

```bash
npm run dev
```

Obre [http://localhost:3000](http://localhost:3000).

## Estructura important

- `app/page.tsx`: landing principal
- `app/privacy-policy/page.tsx`: plantilla de politica de privadesa
- `components/Footer.tsx`: footer global (privadesa + suport)
- `public/.well-known/assetlinks.json`: Android App Links
- `public/.well-known/apple-app-site-association`: iOS Universal Links

## On substituir les teves dades

### Android (`assetlinks.json`)

Fitxer: `public/.well-known/assetlinks.json`

- `target.package_name`
  - Substitueix `com.yourcompany.balanzo` pel package real Android.
- `target.sha256_cert_fingerprints`
  - Substitueix l'empremta de mostra per la SHA-256 del certificat de signing.
  - Si fas servir més d'un certificat (debug/release, Play App Signing), afegeix totes les empremtes necessaries dins l'array.

### iOS (`apple-app-site-association`)

Fitxer: `public/.well-known/apple-app-site-association`

- `applinks.details[0].appIDs`
  - Substitueix `ABCDE12345.com.yourcompany.balanzo` per `TEAMID.bundle.identifier`.
  - Exemple: `1A2BC3D4E5.com.balanzo.app`.
- `applinks.details[0].components`
  - Ajusta els patrons de ruta (`/group/*`, `/invite/*`) segons els deep links reals que vulguis admetre.

## Validacio despres del deploy

Comprova que aquests URLs responen `200` i sense redireccions:

- `https://<el-teu-domini>/.well-known/assetlinks.json`
- `https://<el-teu-domini>/.well-known/apple-app-site-association`

Si no es validen, revisa:
- Que el domini sigui exactament el mateix que configures a l'app.
- Que el contingut JSON sigui valid i sense caracters extra.
- Que no hi hagi redireccions a aquestes dues rutes.
