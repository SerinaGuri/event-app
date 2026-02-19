
<script>
    let { data } = $props();
    console.log( data.Categories);

</script>
<h1>New Event</h1>

<form method="POST" action="?/create">
    <div>
        <label for="name">Event name</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div>
        <label for="description">Event description</label>
        <textarea name="description" id="description"></textarea>
    </div>
    <div>
        <label for="startdate">Event start date</label>
        <input type="date" name="startdate" id="startdate">
    </div>
    <div>
        <label for="starttime">Event for start time</label>
        <input type="time" name="starttime" id="starttime">
    </div>
    <div>
        <label for="category">Select a Category</label>
        <select name="category" id="category">
            {#each data.Categories as category}
             <option value="{category.id}">{category.name}</option>
            {/each}    
        </select>
    </div>
    <div>
        <button type="submit">Create event</button>
    </div>
</form>