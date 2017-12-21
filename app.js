const episodes = [
          { id: 's06e01', title: 'Pilot' },
          { id: 's06e02', title: 'Top Banana' },
          { id: 's06e03', title: 'Charity Drive' },
          { id: 's06e04', title: 'Visiting Ours' },
          { id: 's06e05', title: 'My Mother, the Car' },
          { id: 's06e06', title: 'In God We Trust' },
          { id: 's06e07', title: 'Storming the castle' },
          { id: 's06e08', title: 'Pier Pressure' },
          { id: 's06e09', title: 'Public Relations' },
        ];

        // Add this finaleEpisode to the episodes object  and save that into addToPlaylist.
        const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };
        //addToPlaylist is the new playlist with the added final episode.
        const addToPlaylist = episodes.concat(finaleEpisode);
                console.log(addToPlaylist);

        const removeFromPlaylist = function(specificepisode){
            addToPlaylist.filter(Banana => Banana !== specificepisode )
          }
          // the focus is the specific being removed
          // to DISPLAY the next espisode
      const getNextEpisodeInPlaylist = addToPlaylist.map((next, i, self) => {
        if (i + 1 < self.length){
          return 'Just watched' + next.title + "." + "Next Episode is" + self [i+1].title
        }
      });
      console.log(getNextEpisodeInPlaylist);
