const cardsDefault = [
    {
        id: "a",
        projectName: "Amphithéâtre",
        imgPath: "/projects/project-1.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        filter: "Commerciale"
    },
    {
        id: "b",
        projectName: "Entreprise",
        imgPath: "/projects/project-2.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        filter: "Commerciale"
    },
    {
        id: "c",
        projectName: "Ecole",
        imgPath: "/projects/project-3.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        filter: "Type2"
    },
    {
        id: "d",
        projectName: "Mosquée",
        imgPath: "/projects/project-4.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Type3"
    },
    {
        id: "e",
        projectName: "Centre Culturel",
        imgPath: "/projects/project-5.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Type2"
    },
    {
        id: "f",
        projectName: "Maisons",
        imgPath: "/projects/project-6.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Type4"
    },
    {
        id: "h",
        projectName: "Mosquée",
        imgPath: "/projects/project-7.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        filter: "Commerciale"
    }, 
    {
        id: "i",
        projectName: "Mosquée",
        imgPath: "/projects/project-8.jpeg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Commerciale"
    }
];

export default cardsDefault