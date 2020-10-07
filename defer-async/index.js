// async and defer are boolean attributes, which are used
// along with script tags to load the external scripts efficiently to our webpage
// when we load the webpage, mostly two things happening behind the scenes
// i.e HTML parsing and loading of scripts

// In Normal Case i.e without using async and defer
// first HTML parsing goes on, when the normal script tag is encountered,
// it start's fetching, after that it executes those scripts, then again the HTML parsing continues.

// In Case of async i.e <script async src="" >
// Sctipt tag starts executing asyncronally along with the HTML parsing, after that
// it's same as that of normal case.

// In case of defer i.e <script defer src="">
// Here, also scripts are fetched parallely with HTML parsing, but the difference is
// script gets executed only after the HTML parsing is done.

// async doesn't guarantees the order of execution of scripts, but defer does.
// async can be used when the script tags are not dependent of each other, like in
// case of loading google analytics script, which is not dependent of any of the code, which
// we've written
// and if our scripts are dependent of one-each other, we can then use defer.
// Mostly defer is preffered that async.
