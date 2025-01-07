<script>
    let { player } = $props();
</script>

<div class="player-card text-center mb-3">
    <div>
        <img class="card-img-top" src={player.portrait} alt="" />
    </div>
    <div class="card-body">
        <div class="card-title">
            {player.name}
        </div>
        <a href={`/players/${player._id}`} class="btn btn-primary mt-3">Details</a>
    </div>
</div>

<style>
    .player-card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px;
        transition: transform 0.3s;
        background-color: white;
    }
    .player-card img {
        width: 150px;
        border-radius: 5px;
    }
    .card-title {
        font-size: 1.2rem;
        font-weight: bold;
    }
    .card-body {
        padding: 10px;
    }
    
</style>
