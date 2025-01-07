<script>
    //import { players } from "./data.js";
    let { data } = $props();

    //let players = $state(data.players);
    import PlayerCard from "$lib/components/PlayerCard.svelte";
    import AddPlayerButton from "$lib/components/AddPlayerButton.svelte";
    import { on } from "svelte/events";
</script>

<div class="container text-center mt-5">
    <h1>Most popular Players</h1>
    <AddPlayerButton />
</div>
<p><i>Pictures from transfermarkt.ch</i></p>

<div class="spacer"></div>
<div class="row">
    {#each data.players as player}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
            <PlayerCard {player}></PlayerCard>
        </div>
    {/each}
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
</style>
