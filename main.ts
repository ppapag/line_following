let left = 0
let right = 0
basic.forever(function () {
    left = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    right = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (left == 0 && right == 0) {
        // Both sensors see black line → Go straight
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    } else if (left == 1 && right == 0) {
        // Left is off line (white), right is on line → turn right
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    } else if (left == 0 && right == 1) {
        // Left is on line, right is off → turn left
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        // Both sensors see white → Stop or spin to find line
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    }
})
