Top-Down Solutions:

Synopsis:

Given d dice and t target, assume we know the optimal solution given one less die ( ie. d' = d - 1 ). Let t' denote
the value of t target minus the optimal value of the one less die. Then the optimal solution for d and t can be
recursively derived from d' and t' per the following recurrence relation:

The optimal solution for d dice and t target is equal to the optimal value for some current arbitrary i-th die plus
the optimal solution for d' dice and t' target.
The base case occurs when there are no more dice ( ie. d == 0 ). If the target value is 0, then the sum of all dice values equal the target, return 1, otherwise return 0.

Notes:

To find the optimal value for the current arbitrary i-th die, simply iterate through and try each value of 1..f inclusive.
The target sum is reached when the sum of each die is equal to target t
We keep track of the remaining target t after subtracting target t by each die face f, thus if t == 0, then the target was reached
The pruning condition t-i >= 0 ensures recursion is not performed for die values which surpass the target t
This optimization is necessary to not attempt to memoize negative target values
The solution without memoization results in TLE, since overlapping sub-problems are solved repeatedly.
Top-Down TLE without Memoization:

```Javascript

var numRollsToTarget = (d, f, t, ans=0) => {
    if (d == 0)
        return t == 0;
    for (let i=1; i <= f; ++i)
        if (t - i >= 0)
            ans += numRollsToTarget(d - 1, f, t - i);
    return ans;
};

```

---

Top-Down Accepted with Memoization: use memoization to remember and lookup the optimal solutions to overlapping sub-problems given arbitrary d dice and arbitrary t target. Notice memo is a r-value reference which is moved around since it only needs to survive the recursive callstack. Also, 0 is a valid answer, so -1 is a sentinel value used to determine if an optimal solution was previously memoized (ie. any value > -1 is a valid memoized value).

```Javascript

var numRollsToTarget = (d, f, t, memo=[...Array(30 + 1)].map(() => Array(1000 + 1).fill(-1))) => {
    let go = (d, f, t, ans=0) => {
        if (memo[d][t] > -1)
            return memo[d][t];
        if (d == 0)
            return memo[d][t] = t == 0;
        for (let i=1; i <= f; ++i)
            if (t - i >= 0)
                ans = (ans + go(d - 1, f, t - i)) % (1e9 + 7);
        return memo[d][t] = ans;
    };
    return go(d, f, t);
};
```

---

Bottom-Up Solutions

Synopsis:

Take the top-down solution with memoization and turn it upside-down, starting at the base case, and building upon it, one dice as a time.

Base case: with 0 dice, there is 1 way to reach target of 0. With 0 dice, for all target values > 0, there are 0 ways to reach each of those targets. The default value 0 is used when constructing a vector of integers, so only explicitly set dp[0][0] = 1.
Recurrence relation: with i dice, the number of ways to reach j target is equal to the number of ways with one less die to reach the target j minus each possible f face value of the current die.
Optimizations:

if j-k < 0, then the target has been surpassed, there is no need to further iterate through the remaining k values of f since k is monotonically increasing
only the previous row's values are needed to calculate the current row's values
Bottom-Up Accepted (without optimizations):

```Javascript

var numRollsToTarget = (d, f, t, ans=0) => {
    let dp = [...Array(d + 1)].map(() => Array(t + 1).fill(0));
    dp[0][0] = 1;
    for (let i=1; i <= d; ++i)
        for (let j=1; j <= t; ++j)
            for (let k=1; k <= f; ++k)
                if (j - k >= 0)
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % (1e9 + 7);
    return dp[d][t];
};
```

Bottom-Up Accepted (with optimizations):

```Javascript

var numRollsToTarget = (d, f, t, ans=0) => {
    let cur = Array(t + 1).fill(0);
    cur[0] = 1;
    for (let i=1; i <= d; ++i) {
        let pre = [...cur];
        cur.fill(0);
        for (let j=1; j <= t; ++j)
            for (let k=1; k <= f; ++k)
                if (j - k >= 0)
                    cur[j] = (cur[j] + pre[j - k]) % (1e9 + 7);
                else
                    break;
    }
    return cur[t];
};
```
