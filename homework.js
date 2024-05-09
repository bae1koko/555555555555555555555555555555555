router.post('/student', async function (req, res) {
    let body = req.body
    const { newData, gpa } = await calculateGrade(body);
    res.status(200).send({
      data: {
        subjects: newData,
        GPA: gpa
      },
      message: "success"
    })
  });
  
  function calculateGrade(subjects) {
  
    const newData = []
    const scores = []
    for (index in subjects) {
      if (subjects[index].score > 100) {
        console.log("error");
      }
      else if (subjects[index].score <= 49) {
        newData.push({
          subject: subjects[index].subject,
          grade: "F"
        })
        scores.push(0);
      }
      else if (subjects[index].score <= 60) {
        newData.push({
          subject: subjects[index].subject,
          grade: "D"
        })
        scores.push(1.0);
      }
      else if (subjects[index].score <= 70) {
        newData.push({
          subject: subjects[index].subject,
          grade: "C"
        })
        scores.push(2.0);
      }
      else if (subjects[index].score <= 79) {
        newData.push({
          subject: subjects[index].subject,
          grade: "B"
        })
        scores.push(3.0);
  
      }
      else if (subjects[index].score <= 100) {
        newData.push({
          subject: subjects[index].subject,
          grade: "A"
        })
        scores.push(4.0);
  
      }
    }
    const Sum_gpa = scores.reduce((prev, curr) => prev + curr, 0);
    const gpa = Sum_gpa / scores.length
  
    return { newData, gpa }
  }