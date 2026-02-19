<script>
    let { data } = $props();
</script>
<h1>Edit event</h1>
<form method="POST" action="?/edit">
    <div>
        <label for="name">Event name</label>
        <input type="text" id="name" name="name" required value={data.event.name}>
    </div>
    <div>
        <label for="description">Event description</label>
        <textarea name="description" id="description" value={data.event.description}></textarea>
    </div>
    <div>
        <label for="startdate">Event start date</label>
        <input type="date" name="startdate" id="startdate" value={data.event.startdate.toISOString().substring(0,10)}>
    </div>
    <div>
        <label for="starttime">Event for start time</label>
        <input type="time" name="starttime" id="starttime" value={data.event.starttime}>
    </div>
    <div>
        <button type="submit">Edit event</button>
    </div>
</form>