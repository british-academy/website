{
  dotenv.enable = true;

  languages.javascript.enable = true;
  languages.javascript.bun.enable = true;

  pre-commit.hooks = {
    astro-check = {
      enable = true;
      entry = "astro check";
      files = "\.(ts|astro)$";
      name = "astro check";
    };
    
    eslint = {
      enable = false;
      entry = "bun run eslint";
      files = "\.(ts|astro)$";
      name = "eslint";
    };

    prettier = {
      enable = true;
      entry = "prettier --ignore-unknown --write";
      files = ".*";
    };
  };

  scripts = {
    astro.exec = "bunx --bun astro $@";
    prettier.exec = "bun run prettier $@";
    deploy.exec = ''
      bun install && bun run build
      bunx wrangler pages deploy dist/ \
        --project-name="$CLOUDFLARE_PROJECT" \
        --commit-hash=$(git rev-parse --short "$GITHUB_SHA") \
        --commit-message="$(git log --format=%B -n 1 "$GITHUB_SHA")" \
        --branch="$GITHUB_REF_NAME"
    '';
  };
}
