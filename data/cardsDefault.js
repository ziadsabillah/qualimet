const cardsDefault = [
    {
        id: "a",
        projectName: "Projet 1",
        imgPath: "/img/project-1.jfif",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        filter: "Commerciale"
    },
    {
        id: "b",
        projectName: "Projet 2",
        imgPath: "/img/project-2.jfif",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        filter: "Commerciale"
    },
    {
        id: "c",
        projectName: "Projet 3",
        imgPath: "/img/project-3.jfif",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        filter: "Type2"
    },
    {
        id: "d",
        projectName: "Projet 4",
        imgPath: "/img/project-4.jfif",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Type3"
    },
    {
        id: "e",
        projectName: "Projet 5",
        imgPath: "/img/project-5.jfif",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Type2"
    },
    {
        id: "f",
        projectName: "Projet 6",
        imgPath: "/img/project-6.jfif",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Type4"
    },
    {
        id: "h",
        projectName: "Projet 7",
        imgPath: "/img/project-7.jfif",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Commerciale"
    }, 
    {
        id: "i",
        projectName: "GARE CGV RABAT",
        imgPath: "/slider/gare.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',

        filter: "Commerciale"
    }
];

export default cardsDefault