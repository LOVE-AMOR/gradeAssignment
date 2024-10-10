function gradeAssignment(){
    let grade = prompt("Enter your grade");
    grade = parseInt(grade);

    if (grade >= 90) {
        alert("Excellent");
    } else if (grade >= 80) {
        alert("Good");
    } else if (grade >= 70) {
        alert("Fair");
    } else {
        alert("Needs Improvement");
    }
}