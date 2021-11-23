class Renderer {
    constructor(data) {
        this.data = data
    }

    render() {
        const source = $("#recipes-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(this.data);

        $(".data-div").append(newHTML);
    }
}