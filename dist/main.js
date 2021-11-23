
$('#btn').on('click',function(){
    const inputVal = $("#ingredient-input").val()
    $.get(`recipes/${inputVal}`, function (recipesFinalData) {
        console.log(recipesFinalData);
        const render = new Renderer(recipesFinalData)
        render.render()
    })
})
$(document).on('click','.img-btn',function() {
    let relevantInputValue = $(this).closest(".recipe-div").find("p")[0].innerHTML
    //let currImg = relevantInputValue.getAttribute
    alert(relevantInputValue)
})
