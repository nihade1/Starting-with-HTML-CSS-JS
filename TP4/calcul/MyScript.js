function handleForm(event){

    event.preventDefault();
    const a=event.target.elements.nb1.value;
    const b=event.target.elements.nb2.value;
    const somme=Number(a)+Number(b);
    document.getElementById("result").innerHTML = `<p> la somme est :${somme}</p>`;
}