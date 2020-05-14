# UCLA Indigenous Futurism Project

The UCLA Indigenous Futurism Project aims to create a virtual reality simulation of a intersection between time and space to represent the changes that the indigenous Tongva tribe in DTLA has gone through.

##Delegation of Files
* [index.html](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/blob/master/index.html) and [style.css](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/blob/master/style.css): For editing the preloader page html and css (_Qirui_)
* [scene.js](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/blob/master/scene.js): javascript file for main scene, includes background, camera etc.
* [assets](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/tree/master/assets): Folder containing media assets, like 3D models and images. Upload assets here!
* [tree.js](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/tree/master/tree.js): Javascript file for rendering of tree (_Natasha_)
* [union_station.js](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/tree/master/union_station.js): Javascript file for rendering union station (_John_)


## Initial Setup
This is a walkthrough of what you will need to set up in order to begin working on the project collaboratively.

### Navigating the Command Line Interface
Before setting up anything, you will need to be able to navigate to your command line interface (CLI). The **command line interface (CLI)** or **Bash** (which stands for "Bourne again shell") is an application in your computer that is able to read and execute entered commands. It's much like Windows Explorer or Finder on the Mac, but without the graphical interface (i.e. the fancy buttons and icons). The CLI will differ across operating systems. For the purposes of this project, we will be using the Linux command line.

#### Mac OS
For Mac users, the Linux CLI already pre-exists as an application called **Terminal**. The Terminal app is in the Utilities folder in Applications. To open it, either open your Applications folder, then open Utilities and double-click on Terminal, or press Command - spacebar to launch Spotlight and type "Terminal," then double-click the search result.

You’ll see a small window with a white background open on your desktop. In the title bar are your username, the word "bash" and the dimensions of the window in pixels. This window is your CLI.

#### Windows OS
Windows does not come with a Linux CLI, hence you will have to enable it manually. The first thing you need to do is to enable Windows Subsystem for Linux feature from **PowerShell**, which is Windows' CLI. Go to the Start menu and search for PowerShell. Right clight it and select "Run it as administrator."

Once you have the PowerShell running, use the command below to enable Bash in Windows 10.

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
You’ll be asked to confirm your choice. Type Y or press enter.

Once your system has rebooted, go to the Windows Store and search for “Linux.” You’ll see the option to install Ubuntu or SUSE. You can choose either but for this tutorial, we will be installing Ubuntu.

Once you have installed Linux, it’s time to see how to access Bash in Windows 10. Just search for the Linux distribution you installed in the previous step i.e. "Ubuntu". You’ll see that it runs like a normal Windows application.

It will take some time installing and then you’ll have to set up the username and password. Follow the instructions on the window to set up, and once you are done, you'll be able to use it as your CLI.

### Download Git and GitHub
To begin working on the project, you will need to set up Git and Github on your computer. **Git** is an open-source tool developers install locally to manage and control versions of source code, while **GitHub** is an online service to which developers who use Git can connect and upload or download resources.

Think of Git much like Microsoft Word, where you can edit and save different versions of your word document. GitHub on the other hand is much like Google Drive, where you can upload and download word documents to share with others.

You can set up Git and github on your computer according to the [GitHub's instructions](https://help.github.com/en/github/getting-started-with-github/set-up-git).

### Cloning the Project Repository
The most updated version of the project will be in [the team's GitHub repository](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/). A **repository** is a directory or storage space where your projects can live. While a **GitHub repository** is stored on the remote server GitHub, much like a Google Drive folder is only stored in Google Drive, a **local repository** lives in your local computer storage. A GitHub repository is also referred to as a **remote repository** as it is located somewhere other than your local computer.

To begin working on the project collaboratively, you will need to download the entire project repository so that it also lives us a local repository in your computer. To do this, we will need to clone the project repository. **Cloning a repository** refers to the downloading of a remote GitHub repository into your local computer.

On GitHub, navigate to the main page of the [repository](https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io/). Under the repository name, click **Clone or download**. To clone the repository using HTTPS, under "Clone with HTTPS", click the **copy** icon to copy the link to the repository.

Navigate to you CLI. In your CLI, navigate to a file directory that you want the repository to be downloaded to. This is similar to navigating in your 'Folders' directory to the folder of your choice. You may refer to this tutorial on [navigating directories on the Linux CLI](https://linuxize.com/post/linux-cd-command/) Assuming you want it downloaded in your 'Downloads' folder, you would run the following:
```bash
cd Downloads
```

Once you have decided and navigated to the directory you want the repository downloaded to, you will run the `clone` command on your command line terminal. Run the following command on Bash:
```bash
git clone https://github.com/UCLA-Indigenous-Futurism-Project/UCLA-Indigenous-Futurism-Project.github.io.git
```
Press **Enter**. You should now have a local repository of the project in your computer!

## Working on the project
To begin officially working on the project, you will need to do a few things.

### Navigate to Repository
Firstly, you want to navigate to your local repository on your CLI. You can do this with the same `cd` command.

### Git Branch
Secondly, we will enforce the practice of working on separate Git branches so as not to encounter major code conflicts when we upload changes to the master version, which is directly connected to our website.

You can create a **Git branch** with the following command, which is similar to creating a copy of the master version. Any changes made to the copy will not affect the master branch until you decide to merge the changes.
```bash
git checkout -b new-branch
```

Each time you begin work, you want to navigate to the working branch with the following command:
```bash
git checkout new-branch
```

To ensure that the branch is updated with changes on the master branch that may have been made by other members of the team, you can run the following command:
```bash
git merge master
```

Once you have tested that the new code you have written on your branch is working and you are ready to incorporate it into the master branch, you can merge your branch with the master branch. _Do note that this should be done after you have committed and pushed changes to your branch, which will be addressed in the following section._
```bash
git checkout master
git merge new-branch
```

Once you merge the new branch into the master branch, there will be merge conflicts. **Merge conflicts** indicate portions of the code that differ between the master branch and the new branch, and prompt you to clarify which version of the code you want to keep. If you are using a text editor like **Atom**, the editor will direct you to where the merge conflicts are. The beginning of a merge conflict is marked by `<<<<<<< HEAD`. `=======` marks the center of the conflict, where anything before that refers to the portion of code from the master branch, and anything after refers to the portion of code from thew new branch. `>>>>>>> new_branch_to_merge_later` marks the end of the merge conflict. You will have to choose which portion of code you want to keep by deleting the portions you do not wish to keep, together with the merge conflict markers. For example:
```html
//Merge conflict
<<<<<<< HEAD
<p>hello</p>
=======
<p>hello world</p>
>>>>>>>> new_branch_to_merge_later

//Fixed merge conflict
<p>hello world</p>
```

After you have fixed each merge conflict, you will want to commit the confirmed changes with a short message to describe the conflict to your peers. You can do this with the following command:
```bash
git commit -m "Fixed merge conflicts"
```

### Saving Changes on Git
When working in Git, or other version control systems, the concept of "saving" is a more nuanced process than saving in a word processor or other traditional file editing applications. The traditional software expression of "saving" is synonymous with the Git term "committing". A commit is the Git equivalent of a "save". Traditional saving should be thought of as a file system operation that is used to overwrite an existing file or write a new file. Alternatively, Git committing is an operation that acts upon a collection of files and directories.

The commands: `git add`, `git status`, and `git commit` are all used in combination to save a snapshot of a Git project's current state.

The `git add` command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, `git add` doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.

When you’re ready to save a copy of the current state of the project, you stage changes with `git add`. To save an individual file, you can run this:
```bash
git add index.html
```
To save changes in an individual folder, you can run this:
```bash
git add folder
```
To save all changes in a repository, you can run this:
```bash
git add -A
```

After you’re happy with the staged snapshot, you commit it to the project history with `git commit`. Typically, we would also want to add a message to the commit which describes the changes you have made, so as to make it easier for you or your peers to track it later. It will look like this:
```bash
git commit -m "Made changes to file"
```

The `git reset` command is used to undo a commit or staged snapshot.

Once you are confident that the code is working well, you can begin uploading to the remote GitHub repository. This is done with the `git push` command. And you're all set!
