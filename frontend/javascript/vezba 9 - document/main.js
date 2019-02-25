function main(){
    var fejspuk = new SocialNetwork();
    var user = fejspuk.humans[12];
    console.log(fejspuk);
    var renderer = new Renderer(user);
    renderer.renderAll();
}

main();