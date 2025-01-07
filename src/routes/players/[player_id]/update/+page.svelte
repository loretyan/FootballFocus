<script>
    let { data, form } = $props();
</script>

<a href={`/players/${data.player._id}`}>Back</a>

{#if form?.success}
    <div class="alert alert-success mt-3" role="alert">
        Player updated successfully!
    </div>
{/if}

<h1 class="text-center mt-3">Update {data.player.name}</h1>

<form method="POST" action="?/update">
    <input name="id" type="hidden" value={data.player._id} />
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
            value={data.player.name}
            type="text"
            class="form-control"
            id="name"
            name="name"
            required
        />
    </div>
    <div class="mb-3">
        <label for="value" class="form-label">Value</label>
        <input
            value={data.player.value}
            type="text"
            class="form-control"
            id="value"
            name="value"
            required
        />
    </div>
    <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input
            value={data.player.age}
            type="number"
            class="form-control"
            id="age"
            name="age"
            required
        />
    </div>
    <div class="mb-3">
        <label for="position" class="form-label">Position</label>
        <input
            value={data.player.position}
            type="text"
            class="form-control"
            id="position"
            name="position"
            required
        />
    </div>
    <div class="mb-3">
        <label for="club" class="form-label">Club</label>
        <input
            value={data.player.club}
            type="text"
            class="form-control"
            id="club"
            name="club"
            required
        />
    </div>
    <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">Update Player</button>
    </div>
</form>
