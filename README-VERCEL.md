# Déploiement Filia Appartement Furnitures sur Vercel

## Configuration Vercel ✓

Le projet est maintenant configuré pour Vercel avec les fichiers suivants :

### Fichiers de Configuration

1. **vercel.json** — Configuration de build et déploiement
   - Build command: `pnpm build`
   - Dev command: `pnpm dev`
   - Install command: `pnpm install`
   - Output directory: `dist`
   - Framework: Vite
   - Runtime Node.js: 20.x

2. **.vercelignore** — Fichiers à exclure du déploiement
   - Dependencies (node_modules, .pnpm-store)
   - Fichiers de développement (.vite, .env.local)
   - Fichiers de build (dist, build)
   - Logs et IDE

3. **package.json** — Scripts de build
   - `build`: Compile Vite + esbuild pour le serveur
   - `start`: Lance le serveur en production
   - `dev`: Développement local

## Étapes de Déploiement sur Vercel

### 1. Préparer le Repository GitHub

```bash
# Initialiser Git (si pas déjà fait)
cd /home/ubuntu/filia-galerie
git init
git add .
git commit -m "Initial commit: Filia Appartement Furnitures"

# Ajouter le remote GitHub
git remote add origin https://github.com/YOUR_USERNAME/filia-galerie.git
git branch -M main
git push -u origin main
```

### 2. Connecter à Vercel

1. Allez sur https://vercel.com/new
2. Cliquez sur "Import Git Repository"
3. Sélectionnez le repository `filia-galerie`
4. Vercel détectera automatiquement la configuration Vite

### 3. Configuration Vercel

- **Project Name**: `filia-galerie`
- **Framework Preset**: Vite (auto-détecté)
- **Build Command**: `pnpm build` (auto-rempli)
- **Output Directory**: `dist` (auto-rempli)
- **Install Command**: `pnpm install` (auto-rempli)

### 4. Variables d'Environnement

Ajoutez les variables d'environnement dans Vercel (Settings → Environment Variables) :

```
NODE_ENV=production
VITE_APP_ID=filia-galerie
VITE_APP_TITLE=Filia Appartement Furnitures
VITE_APP_LOGO=/logo.svg
```

### 5. Déployer

Cliquez sur "Deploy" et attendez que Vercel compile et déploie le projet.

## Après le Déploiement

- **URL de production**: `https://filia-galerie.vercel.app` (ou votre domaine personnalisé)
- **Redéploiement automatique**: À chaque push sur `main`
- **Logs de build**: Disponibles dans le dashboard Vercel

## Domaine Personnalisé

Pour ajouter un domaine personnalisé :

1. Allez dans Vercel → Settings → Domains
2. Ajoutez votre domaine (ex: `filia-appartement.com`)
3. Configurez les DNS records selon les instructions Vercel

## Troubleshooting

### Build échoue
- Vérifiez que `pnpm build` fonctionne localement
- Vérifiez les logs Vercel pour les erreurs spécifiques

### Images non affichées
- Assurez-vous que les URLs d'images sont publiques
- Vérifiez que les chemins d'images sont corrects

### Problèmes de performance
- Vercel optimise automatiquement les images
- Utilisez les Edge Functions pour les API routes si nécessaire

## Support

Pour plus d'informations sur Vercel, consultez : https://vercel.com/docs
