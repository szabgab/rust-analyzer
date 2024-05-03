(function() {var type_impls = {
"hir_ty":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Binders%3C%26T%3E\" class=\"impl\"><a href=\"#impl-Binders%3C%26T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Binders&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;T</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + HasInterner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cloned\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">cloned</a>(self) -&gt; Binders&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Converts a <code>Binders&lt;&amp;T&gt;</code> to a <code>Binders&lt;T&gt;</code> by cloning <code>T</code>.</p>\n</div></details></div></details>",0,"hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Binders%3CBinders%3CT%3E%3E\" class=\"impl\"><a href=\"#impl-Binders%3CBinders%3CT%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; Binders&lt;Binders&lt;T&gt;&gt;<div class=\"where\">where\n    T: TypeFoldable&lt;I&gt; + HasInterner&lt;Interner = I&gt;,\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fuse_binders\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">fuse_binders</a>(self, interner: &lt;T as HasInterner&gt;::Interner) -&gt; Binders&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>This turns two levels of binders (<code>for&lt;A&gt; for&lt;B&gt;</code>) into one level (<code>for&lt;A, B&gt;</code>).</p>\n</div></details></div></details>",0,"hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Binders&lt;T&gt;<div class=\"where\">where\n    T: HasInterner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    binders: VariableKinds&lt;&lt;T as HasInterner&gt;::Interner&gt;,\n    value: T\n) -&gt; Binders&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Create new binders.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.empty\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">empty</a>(interner: &lt;T as HasInterner&gt;::Interner, value: T) -&gt; Binders&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps the given value in a binder without variables, i.e. <code>for&lt;&gt; (value)</code>. Since our deBruijn indices count binders, not variables, this\nis sometimes useful.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip_binders\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">skip_binders</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Skips the binder and returns the “bound” value. This is a\nrisky thing to do because it’s easy to get confused about\nDe Bruijn indices and the like. <code>skip_binder</code> is only valid\nwhen you are either extracting data that has nothing to\ndo with bound vars, or you are being very careful about\nyour depth accounting.</p>\n<p>Some examples where <code>skip_binder</code> is reasonable:</p>\n<ul>\n<li>extracting the <code>TraitId</code> from a TraitRef;</li>\n<li>checking if there are any fields in a StructDatum</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_value_and_skipped_binders\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_value_and_skipped_binders</a>(\n    self\n) -&gt; (T, VariableKinds&lt;&lt;T as HasInterner&gt;::Interner&gt;)</h4></section></summary><div class=\"docblock\"><p>Skips the binder and returns the “bound” value as well as the skipped free variables. This\nis just as risky as [<code>skip_binders</code>][Self::skip_binders].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_ref</a>(&amp;self) -&gt; Binders&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;T</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Converts <code>&amp;Binders&lt;T&gt;</code> to <code>Binders&lt;&amp;T&gt;</code>. Produces new <code>Binders</code>\nwith cloned quantifiers containing a reference to the original\nvalue, leaving the original in place.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">map</a>&lt;U, OP&gt;(self, op: OP) -&gt; Binders&lt;U&gt;<div class=\"where\">where\n    OP: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U,\n    U: HasInterner&lt;Interner = &lt;T as HasInterner&gt;::Interner&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Maps the binders by applying a function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter_map\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">filter_map</a>&lt;U, OP&gt;(self, op: OP) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Binders&lt;U&gt;&gt;<div class=\"where\">where\n    OP: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;U&gt;,\n    U: HasInterner&lt;Interner = &lt;T as HasInterner&gt;::Interner&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Transforms the inner value according to the given function; returns\n<code>None</code> if the function returns <code>None</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_ref\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">map_ref</a>&lt;'a, U, OP&gt;(&amp;'a self, op: OP) -&gt; Binders&lt;U&gt;<div class=\"where\">where\n    OP: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;'a T</a>) -&gt; U,\n    U: HasInterner&lt;Interner = &lt;T as HasInterner&gt;::Interner&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Maps a function taking <code>Binders&lt;&amp;T&gt;</code> over <code>&amp;Binders&lt;T&gt;</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.identity_substitution\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">identity_substitution</a>(\n    &amp;self,\n    interner: &lt;T as HasInterner&gt;::Interner\n) -&gt; Substitution&lt;&lt;T as HasInterner&gt;::Interner&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <code>Substitution</code> containing bound vars such that applying this\nsubstitution will not change the value, i.e. <code>^0.0, ^0.1, ^0.2</code> and so\non.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_fresh_type_var\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_fresh_type_var</a>(\n    interner: &lt;T as HasInterner&gt;::Interner,\n    op: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(Ty&lt;&lt;T as HasInterner&gt;::Interner&gt;) -&gt; T\n) -&gt; Binders&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a fresh binders that contains a single type\nvariable. The result of the closure will be embedded in this\nbinder. Note that you should be careful with what you return\nfrom the closure to account for the binder that will be added.</p>\n<p>XXX FIXME – this is potentially a pretty footgun-y function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">len</a>(&amp;self, interner: &lt;T as HasInterner&gt;::Interner) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of binders.</p>\n</div></details></div></details>",0,"hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; Binders&lt;T&gt;<div class=\"where\">where\n    T: TypeFoldable&lt;I&gt; + HasInterner&lt;Interner = I&gt;,\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.substitute\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">substitute</a>(\n    self,\n    interner: I,\n    parameters: &amp;(impl AsParameters&lt;I&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>)\n) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Substitute <code>parameters</code> for the variables introduced by these\nbinders. So if the binders represent (e.g.) <code>&lt;X, Y&gt; { T }</code> and\nparameters is the slice <code>[A, B]</code>, then returns <code>[X =&gt; A, Y =&gt; B] T</code>.</p>\n</div></details></div></details>",0,"hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Binders%3CWhereClause%3CI%3E%3E\" class=\"impl\"><a href=\"#impl-Binders%3CWhereClause%3CI%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; Binders&lt;WhereClause&lt;I&gt;&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_well_formed_goal\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_well_formed_goal</a>(self, interner: I) -&gt; Binders&lt;DomainGoal&lt;I&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>As with <code>WhereClause::into_well_formed_goal</code>, but for a\nquantified where clause. For example, <code>forall&lt;T&gt; { Implemented(T: Trait)}</code> would map to <code>forall&lt;T&gt; { WellFormed(T: Trait) }</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_from_env_goal\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_from_env_goal</a>(self, interner: I) -&gt; Binders&lt;DomainGoal&lt;I&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>As with <code>WhereClause::into_from_env_goal</code>, but mapped over any\nbinders. For example, <code>forall&lt;T&gt; { Implemented(T: Trait)}</code> would map to <code>forall&lt;T&gt; { FromEnv(T: Trait) }</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trait_id\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">trait_id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;TraitId&lt;I&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>If the underlying where clause is a <code>TraitRef</code>, returns its trait id.</p>\n</div></details></div></details>",0,"hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CastTo%3CBinders%3CWhereClause%3CI%3E%3E%3E-for-Binders%3CWhereClause%3CI%3E%3E\" class=\"impl\"><a href=\"#impl-CastTo%3CBinders%3CWhereClause%3CI%3E%3E%3E-for-Binders%3CWhereClause%3CI%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; CastTo&lt;Binders&lt;WhereClause&lt;I&gt;&gt;&gt; for Binders&lt;WhereClause&lt;I&gt;&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast_to\" class=\"method trait-impl\"><a href=\"#method.cast_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cast_to</a>(\n    self,\n    _interner: &lt;Binders&lt;WhereClause&lt;I&gt;&gt; as HasInterner&gt;::Interner\n) -&gt; Binders&lt;WhereClause&lt;I&gt;&gt;</h4></section></summary><div class='docblock'>Cast a value to type <code>T</code>.</div></details></div></details>","CastTo<Binders<WhereClause<I>>>","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CastTo%3CGoal%3CI%3E%3E-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-CastTo%3CGoal%3CI%3E%3E-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T&gt; CastTo&lt;Goal&lt;I&gt;&gt; for Binders&lt;T&gt;<div class=\"where\">where\n    I: Interner,\n    T: HasInterner&lt;Interner = I&gt; + CastTo&lt;Goal&lt;I&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast_to\" class=\"method trait-impl\"><a href=\"#method.cast_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cast_to</a>(self, interner: I) -&gt; Goal&lt;I&gt;</h4></section></summary><div class='docblock'>Cast a value to type <code>T</code>.</div></details></div></details>","CastTo<Goal<I>>","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CastTo%3CProgramClause%3CI%3E%3E-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-CastTo%3CProgramClause%3CI%3E%3E-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T&gt; CastTo&lt;ProgramClause&lt;I&gt;&gt; for Binders&lt;T&gt;<div class=\"where\">where\n    I: Interner,\n    T: HasInterner&lt;Interner = I&gt; + CastTo&lt;DomainGoal&lt;I&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast_to\" class=\"method trait-impl\"><a href=\"#method.cast_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cast_to</a>(self, interner: I) -&gt; ProgramClause&lt;I&gt;</h4></section></summary><div class='docblock'>Cast a value to type <code>T</code>.</div></details></div></details>","CastTo<ProgramClause<I>>","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Binders&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + HasInterner,\n    &lt;T as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Binders&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Binders&lt;T&gt;<div class=\"where\">where\n    T: HasInterner + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasInterner-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-HasInterner-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; HasInterner for Binders&lt;T&gt;<div class=\"where\">where\n    T: HasInterner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Interner\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Interner\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Interner</a> = &lt;T as HasInterner&gt;::Interner</h4></section></summary><div class='docblock'>The interner associated with the type.</div></details></div></details>","HasInterner","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Hash-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for Binders&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + HasInterner,\n    &lt;T as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoIterator-for-Binders%3CV%3E\" class=\"impl\"><a href=\"#impl-IntoIterator-for-Binders%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for Binders&lt;V&gt;<div class=\"where\">where\n    V: HasInterner + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = U&gt;,\n    U: HasInterner&lt;Interner = &lt;V as HasInterner&gt;::Interner&gt;,</div></h3></section></summary><div class=\"docblock\"><p>Allows iterating over a Binders&lt;Vec<T>&gt;, for instance.\nEach element will include the same set of parameter bounds.</p>\n</div><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = Binders&lt;U&gt;</h4></section></summary><div class='docblock'>The type of the elements being iterated over.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoIter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IntoIter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" class=\"associatedtype\">IntoIter</a> = BindersIntoIterator&lt;V&gt;</h4></section></summary><div class='docblock'>Which kind of iterator are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter\" class=\"method trait-impl\"><a href=\"#method.into_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\" class=\"fn\">into_iter</a>(self) -&gt; &lt;Binders&lt;V&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a></h4></section></summary><div class='docblock'>Creates an iterator from a value. <a href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\">Read more</a></div></details></div></details>","IntoIterator","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoWhereClauses%3CI%3E-for-Binders%3CInlineBound%3CI%3E%3E\" class=\"impl\"><a href=\"#impl-IntoWhereClauses%3CI%3E-for-Binders%3CInlineBound%3CI%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; IntoWhereClauses&lt;I&gt; for Binders&lt;InlineBound&lt;I&gt;&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Output</a> = Binders&lt;WhereClause&lt;I&gt;&gt;</h4></section><section id=\"method.into_where_clauses\" class=\"method trait-impl\"><a href=\"#method.into_where_clauses\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">into_where_clauses</a>(\n    &amp;self,\n    interner: I,\n    self_ty: Ty&lt;I&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Binders&lt;WhereClause&lt;I&gt;&gt;&gt;</h4></section></div></details>","IntoWhereClauses<I>","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Binders&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + HasInterner,\n    &lt;T as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Binders&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3CI%3E-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-TypeFoldable%3CI%3E-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; TypeFoldable&lt;I&gt; for Binders&lt;T&gt;<div class=\"where\">where\n    I: Interner,\n    T: HasInterner&lt;Interner = I&gt; + TypeFoldable&lt;I&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_fold_with</a>&lt;E&gt;(\n    self,\n    folder: &amp;mut dyn FallibleTypeFolder&lt;I, Error = E&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Binders&lt;T&gt;, E&gt;</h4></section></summary><div class='docblock'>Apply the given folder <code>folder</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nfolder. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fold_with</a>(\n    self,\n    folder: &amp;mut dyn TypeFolder&lt;I, Error = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<I>","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeVisitable%3CI%3E-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-TypeVisitable%3CI%3E-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"hir_ty/trait.TypeVisitable.html\" title=\"trait hir_ty::TypeVisitable\">TypeVisitable</a>&lt;I&gt; for Binders&lt;T&gt;<div class=\"where\">where\n    I: Interner,\n    T: HasInterner + <a class=\"trait\" href=\"hir_ty/trait.TypeVisitable.html\" title=\"trait hir_ty::TypeVisitable\">TypeVisitable</a>&lt;I&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit_with\" class=\"method trait-impl\"><a href=\"#method.visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hir_ty/trait.TypeVisitable.html#tymethod.visit_with\" class=\"fn\">visit_with</a>&lt;B&gt;(\n    &amp;self,\n    visitor: &amp;mut dyn <a class=\"trait\" href=\"hir_ty/trait.TypeVisitor.html\" title=\"trait hir_ty::TypeVisitor\">TypeVisitor</a>&lt;I, BreakTy = B&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/control_flow/enum.ControlFlow.html\" title=\"enum core::ops::control_flow::ControlFlow\">ControlFlow</a>&lt;B&gt;</h4></section></summary><div class='docblock'>Apply the given visitor <code>visitor</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nvisitor. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details></div></details>","TypeVisitable<I>","hir_ty::Binders"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zip%3CI%3E-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Zip%3CI%3E-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T&gt; Zip&lt;I&gt; for Binders&lt;T&gt;<div class=\"where\">where\n    I: Interner,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + HasInterner&lt;Interner = I&gt; + Zip&lt;I&gt; + TypeFoldable&lt;I&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zip_with\" class=\"method trait-impl\"><a href=\"#method.zip_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zip_with</a>&lt;Z&gt;(\n    zipper: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;mut Z</a>,\n    variance: Variance,\n    a: &amp;Binders&lt;T&gt;,\n    b: &amp;Binders&lt;T&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, NoSolution&gt;<div class=\"where\">where\n    Z: Zipper&lt;I&gt;,</div></h4></section></summary><div class='docblock'>Uses the zipper to walk through two values, ensuring that they match.</div></details></div></details>","Zip<I>","hir_ty::Binders"],["<section id=\"impl-Copy-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Copy-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for Binders&lt;T&gt;<div class=\"where\">where\n    T: HasInterner + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    &lt;&lt;T as HasInterner&gt;::Interner as Interner&gt;::InternedVariableKinds: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","hir_ty::Binders"],["<section id=\"impl-Eq-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Binders&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + HasInterner,\n    &lt;T as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hir_ty::Binders"],["<section id=\"impl-StructuralPartialEq-for-Binders%3CT%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Binders%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for Binders&lt;T&gt;<div class=\"where\">where\n    T: HasInterner,</div></h3></section>","StructuralPartialEq","hir_ty::Binders"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()