<script>
    let {data} = $props();
</script>

<h1>Manage my events</h1>
<a href="/admin/event/new">
    <button>Add new event</button>
</a>
<main>
    {#each data.events as event}
    <div class="event">
        <p>{event.name}</p>
        <h3>{event.category_name}</h3>
        <div>
            <a href="/admin/event/{event.id}/edit">
            <button>Edit</button></a>
        <form action="?/delete" method="POST">
            <input type="hidden" value={event.id} name="id">
            <button type="submit">Delete</button>
        </form>
        </div>
    </div>
    {/each}
</main>
<style>
    main{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .event{
        border: 1px solid black;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }
    button{
		background-color: rgb(255, 197, 225);
		height: 20px;
	}
</style>