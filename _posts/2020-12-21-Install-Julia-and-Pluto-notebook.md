---
layout: post
title: Install Julia and Pluto Notebook
comments: true
---

### How to Install Julia on Ubuntu/Linux Mint

>"Julia is a high-level, high-performance, dynamic programming language. While it is a general purpose language and can be used to write any application, many of its features are well-suited for high-performance numerical analysis and computational science.”
— from Wikipedia: Julia (programming language).

In this guide, I’ll show you how to get started with Julia on Ubuntu 16.04 (or above).

#### <span style="color:blue">**Install Julia**</span>

1. Download the latest version of **Julia** at [Julia.org](https://julialang.org/downloads/)
2. Extract the `.tar.gz` file:
```bash
$ tar -xvzf julia-1.5.3-linux-x86_64.tar.gz
```
3. Copy the extracted folder to `/opt`:
```bash
$ sudo cp -r julia-1.5.3 /opt/
```
4. Finally, create a symbolic link to **Julia** inside the `/usr/local/bin` folder:
```bash
$ sudo ln -s /opt/julia-1.5.3/bin/julia /usr/local/bin/julia
```
Finally, you can test your installation by re-opening a terminal and typing:
```bash
$ julia
```

#### <span style="color:blue">**Install Pluto notebook**</span>

Next we will install the <span style="color:purple">**Pluto notebook**</span> that we will be using during the course. Pluto is a Julia programming environment designed for interactivity and quick experiments.

Open the **Julia REPL**. This is the command-line interface to Julia, similar to the previous screenshot.

Here you type Julia commands, and when you press ENTER, it runs, and you see the result.

To install Pluto, we want to run a *package manager command*. To switch from Julia mode to Pkg mode, type `]` (closing square bracket) at the `julia>` prompt:

```julia
julia> ]

(@v1.5) pkg>
```

The line turns blue and the prompt changes to pkg>, telling you that you are now in package manager mode. This mode allows you to do operations on packages (also called libraries).

To install Pluto, run the following (case sensitive) command to add (install) the package to your system by downloading it from the internet. You should only need to do this once for each installation of Julia:

```julia
(@v1.5) pkg> add Pluto
```
#### <span style="color:blue">**Running Pluto and opening a Notebook**</span>

**Start Pluto**

Start the Julia REPL, like you did during the setup. In the REPL, type:

```julia
julia> using Pluto
julia> Pluto.run()
```
The terminal tells us to go to `http://localhost:1234/` (or a similar URL). Let's open `Firefox` or `Google Chrome` and type that into the address bar.
