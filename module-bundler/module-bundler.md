These module bundler's exist, because previously, there's this issue called implicit dependency between the javascript files, one solution can be to merge all the javascript files into one solution, this is what tools like `gulp` and `grunt` do(but takes huge amount to maintain it), but we need a tool that recognises dependencies and graphs them and combines files to respect of their dependencies order, that's what the module bundler's do, some of the examples like Web pack, roll up, parcel and etc.