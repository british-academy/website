{
  dotenv.enable = true;
  languages.javascript.enable = true;
  languages.javascript.bun.enable = true;

  pre-commit.hooks = {
    astro-check = {
      enable = true;
      entry = "astro check";
      files = "\.(ts|astro)$";
    };
    
    # TODO: re-enable eslint when configuration is fixed
    # eslint = {
    #   enable = true;
    #   entry = "eslint";
    #   files = "\.(ts|astro)$";
    # };

    prettier = {
      enable = true;
      entry = "prettier --write";
      files = ".*";
    };
  };

  scripts.astro.exec = "bunx astro $@";
  scripts.eslint.exec = "bunx eslint --flag unstable_ts_config $@";
  scripts.prettier.exec = "bunx prettier --ignore-unknown $@";
  scripts.deploy.exec = ''
    bun run install && bun run build
    bunx wrangler pages deploy dist/ \
      --project-name="$CLOUDFLARE_PROJECT" \
      --commit-hash=$(git rev-parse --short "$GITHUB_SHA") \
      --commit-message="$(git log --format=%B -n 1 "$GITHUB_SHA")" \
      --branch="$GITHUB_REF_NAME"
  '';
}
