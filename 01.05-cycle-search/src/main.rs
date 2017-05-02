extern crate rand;

use rand::Rng;

fn main() {
    let mut perm: Vec<_> = (0..1_000_000).collect();
    rand::weak_rng().shuffle(&mut perm);

    // Uncomment for simple test case
    //let perm: [usize; 7] = [1, 2, 0, 4, 5, 6, 3];
    let (idx, len) = find_longest_cycle(&perm);

    println!("Array length: {}", perm.len());
    println!("Cycle index: {}", idx);
    println!("Cycle length: {}", len);
}

fn find_longest_cycle(perm: &[usize]) -> (usize, usize) {
    assert!(!perm.is_empty(), "Permutation is empty");

    let mut visited = vec![false; perm.len()];

    let mut curr_max_len = 0;
    let mut cycle_index = 0;

    for i in 0..perm.len() {
        let mut curr = i;
        let mut length = 0;

        while !visited[curr] {
            visited[curr] = true;
            length += 1;

            curr = perm[curr];
        }

        if length > curr_max_len {
            curr_max_len = length;
            cycle_index = curr;
        }
    }

    (cycle_index, curr_max_len)
}
