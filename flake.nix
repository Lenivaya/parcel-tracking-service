{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    treefmt-nix.url = "github:numtide/treefmt-nix";
    treefmt-nix.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs @ {
    nixpkgs,
    flake-parts,
    treefmt-nix,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;}
    {
      imports = [
        treefmt-nix.flakeModule
      ];

      systems = nixpkgs.lib.systems.flakeExposed;
      perSystem = {
        pkgs,
        self',
        lib,
        ...
      }: {
        devShells = let
          bareMinimum = with pkgs; [corepack just];
        in {
          default = pkgs.mkShell {
            nativeBuildInputs = bareMinimum;
          };

          ci-format = pkgs.mkShell {
            name = "ci-format";
            nativeBuildInputs = with pkgs;
              [
              ]
              ++ bareMinimum;
          };
        };

        treefmt = {
          projectRootFile = "flake.nix";

          programs = {
            alejandra.enable = true;
            yamlfmt.enable = true;
            csharpier.enable = true;
            # Manage using ci instead
            # prettier.enable = true;
          };
        };
      };
    };
}
