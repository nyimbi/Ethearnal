function deleteGig(gigID, $gig) {

    $.ajax({
        url: '/api/v1/dht/gigs/?hkey=' + gigID,
        type: 'DELETE',
        hkey: gigID,
        success: function(result) {
            console.log('GIG DELETED: ' + this.hkey);
            $gig.remove();
        }
    });
}
