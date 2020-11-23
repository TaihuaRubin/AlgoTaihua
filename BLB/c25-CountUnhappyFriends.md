# Count Unhappy Friends

## Topics: Array

---

## Solutions:

// solution 1:

```javascript
const unhappyFriends = (n, preferences, pairs) => {
  let unhappy = 0;
  const partners = Array(n).fill(0);
  for (let p of pairs) {
    partners[p[0]] = p[1];
    partners[p[1]] = p[0];
  }

  //Iterating over all people i in the group
  for (let i = 0; i < n; i++) {
    //Iterating through all friends of current person i preceding person i's assigned partner in the preference hierarchy
    let j = 0;
    while (preferences[i][j] !== partners[i]) {
      //If the current friend, who is preferred for the current person i, has a partner who is less preferred a friend to him/her than the current person i, then person i is unhappy
      const current_friend = preferences[i][j];
      if (preferences[current_friend].indexOf(partners[current_friend]) > preferences[current_friend].indexOf(i)) {
        unhappy++;
        break; //If the current person i is unhappy we don't have to look at the other friends, move to the next person i
      }
      j++;
    }
  }

  return unhappy;
};
```

// solution 2:

```javascript
We can use a 🗺 map m to store the kth preference per ith friend for O(1) lookups per comparison, ie. the ith friends's preference for the jth friend is stored in m[i][j]. And we can use another 🗺 map adj to store adjacent pairs. Increment the count cnt each time we find an i,j pair where the ith friend prefers the jth friend over the ith friend's adjacent pair and the jth friend prefers the ith friend over the jth friend's adjacent pair.



let unhappyFriends = (N, pref, pairs, adj = new Map(), cnt = 0) => {
    pairs.forEach(([i, j]) => {
        adj.set(i, j);
        adj.set(j, i);
    });
    let m = [...Array(N)].map(_ => Array(N).fill(0));
    for (let i = 0; i < N; ++i)
        for (let j = 0, k = N; j < pref[i].length; ++j, --k)
            m[i][pref[i][j]] = k;                     // k-th order of preference (highest preference on the left, lowest preference on the right)
    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j) {
            if (i == j)
                continue;
            if (m[i][j] > m[i][adj.get(i)] &&         // i prefers j over i's adjacent pair
                m[j][i] > m[j][adj.get(j)]) {         // j prefers i over j's adjacent pair
                ++cnt;
                break;                                // 🎯 i-th unhappy friend found
            }
        }
    }
    return cnt;
};


```
