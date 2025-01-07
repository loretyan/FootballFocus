<script>
    let { data } = $props();
    //import UpdatePlayerButton from "$lib/components/UpdatePlayerButton.svelte";
    //import DeletePlayerButton from "$lib/components/DeletePlayerButton.svelte";
    import { on } from "svelte/events";
</script>

<a href="/players">Back</a>

<div class="header text-center">
    <h1 class="mt-5">{data.player.name}</h1>
    <img class="portrait-small mb-3" src={data.player.portrait} alt="" />
</div>
<div class="container text-center">
    <p>Value: {data.player.value}</p>
    <p>Age: {data.player.age}</p>
    <p>Position: {data.player.position}</p>
    <p>Club: {data.player.club}</p>
</div>
<!-- <UpdatePlayerButton /> -->
<!-- <DeletePlayerButton /> -->
<div style="display: flex; justify-content: center; gap: 10px; align-items: center; margin-top: 20px;">
    <a href={`/players/${data.player._id}/update`} class="btn btn-primary mb-3 mt-3">Update Player</a>
    <form method="POST" action="?/delete">
        <input name="id" type="hidden" value={data.player._id} />
        <button class="btn btn-danger">Delete Player</button>
    </form>
</div>

<style>
    .portrait-small {
        transform: scale(0.8);
        margin-right: 10px;
        border-radius: 8px;
    }
    .container {
        background-color: white;
        padding: 20px;
        border: 1px solid black;
        border-radius: 8px;
        max-width: 300px;
        margin: 0 auto;
        text-align: left;
    }
</style>
