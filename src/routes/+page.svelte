<script>
    let {data} = 
    $props();
</script>
<h1>Events in Shkodra</h1>

<main>
    {#each data.events as event}
    <a href={"/event/" + event.id}>
    <h2>{event.name}</h2>
    <p>{event.description}</p>
    <p>{event.category_name}</p>
    </a>
    {/each}

</main>
<style>
    main{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        gap: 10px;
        
    }
    a{
        background-color: plum;
    }
</style>