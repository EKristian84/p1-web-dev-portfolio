# Submission Workflow

Welcome to your step-by-step guide to submitting project! This workflow is designed to make your submission process smooth and ensure you get the feedback needed to excel.

## Step 1 - Check Out Your Branch 🌿

Begin by switching to the branch assigned for your project. This branch is your dedicated space for the entire assignment

![expected-output](https://iili.io/JM4V6Wx.gif)

```sh
git checkout hw-html
```

> Why? This siwtches your working environment to the specific branch for this assignment.

## Step 2 - Find Your Workspace 📂

Navigate to the assignment's directory. This is where all your work will take place. Ensure all files for submissions are within this directory.

![expected-output](https://iili.io/JM4E8Hg.png)

## Step 3 - Code, Code, Code and Repeat 🧑‍💻

Now, the fun part - code your solution! Take your time, experiment, and remember, it's all about learning.

## Step 4 - Stage & Commit Your Work 📸

As you make progress, it's crucial to regularly save your work. This doesn't just safeguard your changes; it also creates a clear history of your development process.

![expected-output](https://iili.io/JM4WWdP.gif)

```sh
git add -A
```

> What's this? It stages all your changes, readying them for commit.

```sh
git commit -m "feat: Updated content in index.html"
```

> Why? Committing your changes with a descriptive message captures a snapshot of your work at that moment.

### 🌟 Pro Tip: Commit Early, Commit Often

Don't wait to make one big commit at the end of your work. Instead, commit your progress frequently. This practices has several benefits:

- **Safety Net:** Regular commits mean you're less likely to lose significant work if something goes wrong.
- **Milestones:** Each commit represents a completed piece of work, making it easier to track your progress and backtract if necessary.
- **Simpler Reviews:** Smaller, incremental commits make it easier for reviewers to understand your changes and provide precise feedback. 

## Step 5 - Share Your Progress 🌍

Push your commits to GitLab to share your updates with the class and instructors

![push](https://iili.io/JM4hgbn.gif)

```sh
git push
```

> What does this do? It uploads your work to GitLab, making it accessible to others.

## Step 6 - Request Feedback ➡️

Create a Merge Request in GitLab when you're ready for feedback. This is like saying, "I'm ready to show my work."

![merge-request](https://docs.upliftcodecamp.com/assets/images/image-032-da4df91e85bce3a7e896c49951d2424c.jpg)

![new-merge-request](https://iili.io/JM4wf44.gif)

![select-merge-request](https://iili.io/JM4eGt9.gif)

## Step 7 - Describe Your Work 📝

In the Merge Request, provided a title and a summary of your changes. This helps reviewers understand your approach and any challenges you faced.

![fill-in-details](https://iili.io/JM4vlh7.gif)

## Step 8 - Engage in Code Review 🕵️‍♂️

Once your Merge Request is open, stay tuned for comments and suggestions. Remember, feedback is a gift!

📌 **Important:** DO NOT push any changes during the code review period.

![merge-request](https://iili.io/JM4U9XS.png)

## Step 9 - Finalize Your Submission ✅

Copy your Merge Request link and submit it via our Learning Management System (LMS). This makes your submission official.

1. Once you've created the merge request, ensure you copy its URL.
2. Navigate to our Learning Management System (LMS), locate and select `Add Submission`, then insert the copied link into the designated text box before selecting `Save Changes`.
3. Next, initiate the submission process by clicking on `Submit assignment`
4. To complete your submission, click on the `Continue` button for final confirmation.

![submission](https://iili.io/JM6H8MX.png)

## Step 10 - Implement Feedback 🔄

After receiving feedback, you'll have a set period to make adjustments. Update your submission with any necessary changes.

You **DO NOT** need to create a new Merge Request for each push. All branch changes are automatically included in the Merge Request

## 🚀 Pro Tips

- **Start Early:** Opening a Merge Request early gives you plenty of time to receive and implement feedback.
- **Keep It Clean:** Only include relevant files in your submission to help reviewers focus on your work.
- **Communicate Clearly:** Detailed commit messages and Merge Request descriptions are invaluable. They serve as a record and guide for both you and your reviewers.
- **Feedback is a Two-way Street:** Address mandatory comments to get approval, consider suggestions for improving your code, and engage in discussions about your implementation choices.