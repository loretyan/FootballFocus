<script>
    let { club } = $props();
</script>

<div class="club-card text-center mb-3">
    <div>
        <img class="card-img-top" src={club.logo} alt="" />
    </div>
    <div class="card-body">
        <div class="card-title">
            {club.name}
        </div>
        <div>
            EST.: {club.yearOfEstablishment}
        </div>
        <div>
            STADIUM: {club.stadium}
        </div>
        <a href={`/clubs/${club._id}`} class="btn btn-primary mt-3">Details</a>
    </div>
</div>

<style>
    .club-card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        transition: transform 0.3s;
        background-color: white;
    }
    .club-card img {
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
