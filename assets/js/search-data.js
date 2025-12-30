// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "post-deep-learning-for-computational-structural-biology",
        
          title: "Deep Learning for Computational Structural Biology",
        
        description: "A Roadmap for Enthusiasts",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/DeepLearning4StructuralBiology/";
          
        },
      },{id: "post-boltzgen-redefines-protein-binder-design",
        
          title: "BoltzGen Redefines Protein Binder Design",
        
        description: "with Unified All-Atom Architecture",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/BoltzGen/";
          
        },
      },{id: "post-deep-learning-for-protein-ligand-binding",
        
          title: "Deep Learning for Protein-Ligand Binding",
        
        description: "Are We Learning Physics or Memorizing the PDB?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/DL-AffinityPred/";
          
        },
      },{id: "post-se-3-and-e-3-equivariance-in-computational-structural-biology",
        
          title: "SE(3) and E(3) Equivariance in Computational Structural Biology",
        
        description: "Symmetry as a Design Principle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Equivariance/";
          
        },
      },{id: "post-protein-generation-with-evolutionary-diffusion-evodiff",
        
          title: "Protein generation with evolutionary diffusion (Evodiff)",
        
        description: "How discrete diffusion on sequences unlocks protein design beyond structure",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/EvoDiff/";
          
        },
      },{id: "post-bioemu-a-biomolecular-emulator",
        
          title: "BioEmu - A Biomolecular Emulator",
        
        description: "Microsoft&#39;s breakthrough in protein dynamics prediction reshapes computational biology",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/BioEmu/";
          
        },
      },{id: "post-protein-language-models",
        
          title: "Protein Language Models",
        
        description: "A Technical Guide for Enthusiasts",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Protein-LM/";
          
        },
      },{id: "post-inside-proteinmpnn",
        
          title: "Inside ProteinMPNN",
        
        description: "The neural network transforming computational protein design",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ProteinMPNN/";
          
        },
      },{id: "post-rfdiffusion-revolution",
        
          title: "RFDiffusion Revolution",
        
        description: "From Backbone to Atomic Precision",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/RFDiffusion/";
          
        },
      },{id: "post-esmfold-protein-language-model",
        
          title: "ESMFold - Protein Language Model",
        
        description: "From masked language models to protein generation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ESM/";
          
        },
      },{id: "post-an-overview-of-boltz-2",
        
          title: "An Overview of Boltz-2",
        
        description: "A Foundation Model for Biomolecular Structure and Binding Affinity Prediction",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Boltz2/";
          
        },
      },{id: "post-the-alphafold-revolution-in-structural-biology",
        
          title: "The AlphaFold revolution in Structural Biology",
        
        description: "From distance matrices to diffusion",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/AlphaFold-evolution/";
          
        },
      },{id: "post-understanding-alphafold3",
        
          title: "Understanding AlphaFold3",
        
        description: "a quick look at the architecture",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/AlphaFold3/";
          
        },
      },{id: "post-inside-alphafold2",
        
          title: "Inside AlphaFold2",
        
        description: "a technical deep dive into the architecture",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/AlphaFold2/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement/";
            },},{id: "news-our-paper-capturing-the-conformational-heterogeneity-of-hspb1-chaperone-oligomers-at-atomic-resolution-has-been-published-in-jacs-this-is-a-great-collaboration-with-prof-galia-debelouchina-group-also-check-out-our-cover-art-art-sparkles",
          title: 'Our paper “Capturing the Conformational Heterogeneity of HSPB1 Chaperone Oligomers at Atomic Resolution”...',
          description: "",
          section: "News",},{id: "news-our-paper-transient-interdomain-interactions-modulate-the-monomeric-structural-ensemble-and-self-assembly-of-huntingtin-exon-1-has-been-published-in-advanced-science-this-work-with-my-colleague-priyesh-mohanty-brought-a-lot-of-fun-blush",
          title: 'Our paper “Transient Interdomain Interactions Modulate the Monomeric Structural Ensemble and Self-Assembly of...',
          description: "",
          section: "News",},{id: "news-our-paper-uncovering-the-molecular-interactions-underlying-mbd2-and-mbd3-phase-separation-has-been-published-in-jpcb-this-is-a-great-collaboration-with-prof-alaji-bah-group-also-check-out-our-cover-art-art-sparkles",
          title: 'Our paper “Uncovering the Molecular Interactions Underlying MBD2 and MBD3 Phase Separation” has...',
          description: "",
          section: "News",},{id: "news-our-paper-a-disordered-linker-in-the-polycomb-protein-polyhomeotic-tunes-phase-separation-and-oligomerization-has-been-published-in-molecular-cell-this-is-an-exciting-collaboration-with-prof-nicole-francis-group",
          title: 'Our paper “A disordered linker in the Polycomb protein Polyhomeotic tunes phase separation...',
          description: "",
          section: "News",},{id: "news-our-paper-on-polyq-using-multi-ego-force-field-has-been-published-in-jpcb-https-doi-org-10-1021-acs-jpcb-5c06627-congrats-to-the-team-esp-avijeet-sparkles-clap",
          title: 'Our paper on polyQ using multi-eGO force field has been published in JPCB...',
          description: "",
          section: "News",},{id: "news-our-work-on-refining-all-atom-force-field-has-been-online-in-nature-communications-sparkles-firecracker",
          title: 'Our work on refining all-atom force field has been online in Nature Communications!...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%65%6E%6D%69%6E%68%70%68%61%6E@%74%61%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=O0Rlwm4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
