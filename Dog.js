// Create the Dog class here

class DogConstructor {
    constructor(data){
        Object.assign(this, data)
    }

    getDogHtml(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this

        return ` 
        <div id="dog-html" class="dog-html">
            <div class="dog-img" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%) , url(${avatar})">
                <div id="dog-information" class="dog-information">
                    <div id="badge-container" class="like-nope">
                    </div>
                    <div class="dog-text">
                        <h3>${name}, ${age}</h3>
                        <p>${bio}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


export { DogConstructor }