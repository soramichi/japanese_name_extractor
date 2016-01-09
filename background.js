﻿var threashold = 0.15;

// transition matrix from character i to character j
var transition = [
    //    a,     b,     c,     d,     e,     f,     g,     h,     i,     j,     k,     l,     m,     n,     o,     p,     q,     r,     s,     t,     u,     v,     w,     x,     y,     z,     ^,     $
    [0.0127,0.0253,0.0127,0.0380,0.0127,0.0000,0.0253,0.0253,0.0886,0.0000,0.3038,0.0000,0.1266,0.1013,0.1139,0.0000,0.0000,0.1266,0.1646,0.1519,0.0000,0.0000,0.0000,0.0000,0.1139,0.0380,0.0000,0.3797],// a
    [0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0633,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// b
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.2532,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// c
    [0.0506,0.0000,0.0000,0.0000,0.0380,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// d
    [0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0127,0.0759,0.0000,0.0253,0.0000,0.0253,0.0380,0.0253,0.0000,0.0000,0.0127,0.0127,0.0380,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.1519],// e
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// f
    [0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0380,0.0000,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// g
    [0.1139,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.8101,0.0000,0.0000,0.0000,0.0000,0.0000,0.0886,0.0000,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// h
    [0.0127,0.0127,0.1646,0.0253,0.0380,0.0000,0.0127,0.0380,0.0127,0.0127,0.3418,0.0000,0.0253,0.1139,0.1013,0.0000,0.0000,0.2278,0.0633,0.0506,0.0000,0.0000,0.0127,0.0000,0.0886,0.0380,0.0000,0.7722],// i
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0506,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0380,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// j
    [0.3418,0.0000,0.0000,0.0000,0.1266,0.0000,0.0000,0.0000,0.3291,0.0000,0.0000,0.0000,0.0000,0.0000,0.5949,0.0000,0.0000,0.0000,0.0000,0.0000,0.1013,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000],// k
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// l
    [0.2405,0.0000,0.0000,0.0000,0.0759,0.0000,0.0000,0.0000,0.3797,0.0000,0.0000,0.0000,0.0000,0.0000,0.1013,0.0000,0.0000,0.0000,0.0000,0.0000,0.0506,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// m
    [0.1899,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0380,0.0253,0.0127,0.0000,0.0000,0.0000,0.1266,0.0000,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0506],// n
    [0.0127,0.0380,0.0000,0.0000,0.0253,0.0000,0.0000,0.0127,0.0506,0.0000,0.1392,0.0000,0.0886,0.0127,0.0000,0.0000,0.0000,0.1519,0.2025,0.0506,0.2278,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,1.0000],// o
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// p
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// q
    [0.0633,0.0000,0.0000,0.0000,0.0127,0.0000,0.0000,0.0000,0.1899,0.0000,0.0000,0.0000,0.0000,0.0000,0.3038,0.0000,0.0000,0.0000,0.0000,0.0000,0.1519,0.0000,0.0000,0.0000,0.0633,0.0000,0.0000,0.0000],// r
    [0.2152,0.0000,0.0000,0.0000,0.0253,0.0000,0.0000,0.3797,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0380,0.0000,0.0000,0.0000,0.0000,0.0000,0.3165,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// s
    [0.2405,0.0000,0.0000,0.0000,0.0380,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.1772,0.0000,0.0000,0.0000,0.2025,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// t
    [0.0000,0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0253,0.0253,0.0127,0.3038,0.0000,0.1646,0.0633,0.0380,0.0000,0.0000,0.1139,0.0253,0.0886,0.0759,0.0000,0.0000,0.0000,0.0380,0.0127,0.0000,0.4051],// u
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// v
    [0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// w
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// x
    [0.1266,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.2658,0.0000,0.0000,0.0000,0.0000,0.0000,0.2532,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// y
    [0.0127,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0759,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// z
    [0.2025,0.0127,0.0759,0.0253,0.0380,0.0127,0.0253,0.2785,0.0633,0.0380,0.3797,0.0000,0.4177,0.1266,0.0127,0.0000,0.0000,0.1519,0.3038,0.2658,0.0253,0.0000,0.0000,0.0000,0.3038,0.0000,0.0000,0.0000],// ^
    [0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000],// $
]

function is_alpha_small(ch){
    if(ch >= "a".charCodeAt(0) && ch <= "z".charCodeAt(0))
	return true;
    else
	false;
}

function calc_likelihood(str){
    // if the given string is too short, return 0
    if(str.length <= 2)
	return 0;

    // calculate the lilelihood of the str to be a Japanese name
    else{
	var ret = 1.0;
	var begin = 26;  // magic number that represents '^' (a.k.a. the beginning of a phrase)
	var end = 27;    // magic number that represents '$' (a.k.a. the end of a phrase)
	var prev_index = begin;
	var n_non_alphabet = 0;
	
	for(var i=0; i<str.length; i++){
	    var this_char_code_small = str.toLowerCase().charCodeAt(i);

	    // skip a non-alphabet characeter
	    // Note: this is NOT equivalent as "if(!is_alpha(this_char_code))", because
	    // charCodeAt() for an alphabet with an accent mark (e.g. E') returns the same code as the alphabet w/o the accent (e.g. E),
	    // while toLowerCase() for the alphabet does NOT convert it to the small counterpart (e.g. e').
	    if(!is_alpha_small(this_char_code_small)){
		n_non_alphabet++;
	    }
	    // multiple of the transition probability from the previous character to the current character
	    else{
		var index = this_char_code_small - "a".charCodeAt(0);
		try{
		    ret *= transition[prev_index][index];
		}
		catch(e){
		    alert(str + ", " + prev_index + ", " + index);
		}
		prev_index = index;
	    }
	}

	ret *= transition[prev_index][end];

	return Math.pow(ret, 1.0 / (str.length - n_non_alphabet));
    }
}

// extract all text contents from the page
function get_text_contents(elm){
    var ret = "";
    
    if (elm.hasChildNodes()){
	var children = elm.childNodes;
	
	for (var i = 0; i < children.length; i++) {
	    ret += (" " + get_text_contents(children[i]));
	}
	return ret;
    }
    // leaf node
    else {
	return elm.textContent;
    }
}
str = get_text_contents(document.documentElement).replace(/\r?\n/g, " ").split(" ");

// calculate likelihood of each text content
var names = [];
for(var i=0; i<str.length; i++){
    var likelihood = calc_likelihood(str[i]);

    // if the likelihood exceeds the threashold, str is a Japanese name
    if(likelihood > threashold){
	names.push(str[i]);
    }
}

alert(names);
