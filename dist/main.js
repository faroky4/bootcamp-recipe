
$('#btn').on('click',function(){
    const inputVal = $("#ingredient-input").val()
    $.get(`recipes/${inputVal}`, function (recipesFinalData) {
        console.log(recipesFinalData);
        const render = new Renderer(recipesFinalData)
        render.render()
    })
})
$('.img-btn').on('click', function() {
    let relevantInputValue = $(this).closest("recipe-div").find(".img-btn").val()
    alert(relevantInputValue)
  })
