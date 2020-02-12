export const state = () => ({
    points: 0
})

export const mutations = {
    computePoints(state, group) {
        let pokerValues = [1, 2, 3, 5, 8, 13, 21]
        state.points =
            pokerValues[
            group
                .map(n => parseInt(n))
                .reduce((carry, value) => carry + value)
            ]

    },
    resetPoints(state) {
        state.points = 0
    }
}