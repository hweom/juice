(function() {var implementors = {};
implementors["rust_blas"] = [{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt; for &amp;'a dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"rust_blas/vector/ops/trait.Copy.html\" title=\"trait rust_blas::vector::ops::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_blas/vector/ops/trait.Scal.html\" title=\"trait rust_blas::vector::ops::Scal\">Scal</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::matrix::Matrix"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt; + 'a)&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + 'a)&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;<a class=\"struct\" href=\"https://docs.rs/num-complex/0.4/num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt;&gt; + 'a)&gt; for <a class=\"type\" href=\"https://docs.rs/num-complex/0.4/num_complex/type.Complex32.html\" title=\"type num_complex::Complex32\">Complex32</a>","synthetic":false,"types":["num_complex::Complex32"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;<a class=\"struct\" href=\"https://docs.rs/num-complex/0.4/num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;&gt; + 'a)&gt; for <a class=\"type\" href=\"https://docs.rs/num-complex/0.4/num_complex/type.Complex64.html\" title=\"type num_complex::Complex64\">Complex64</a>","synthetic":false,"types":["num_complex::Complex64"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; + 'a)&gt; for &amp;'a dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rust_blas/default/trait.Default.html\" title=\"trait rust_blas::default::Default\">Default</a> + <a class=\"trait\" href=\"rust_blas/matrix/ops/trait.Gemm.html\" title=\"trait rust_blas::matrix::ops::Gemm\">Gemm</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::matrix::Matrix"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; + 'a)&gt; for <a class=\"enum\" href=\"rust_blas/math/enum.Trans.html\" title=\"enum rust_blas::math::Trans\">Trans</a>&lt;&amp;'a dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt;&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rust_blas/default/trait.Default.html\" title=\"trait rust_blas::default::Default\">Default</a> + <a class=\"trait\" href=\"rust_blas/matrix/ops/trait.Gemm.html\" title=\"trait rust_blas::matrix::ops::Gemm\">Gemm</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::math::Trans"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"enum\" href=\"rust_blas/math/enum.Trans.html\" title=\"enum rust_blas::math::Trans\">Trans</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; + 'a)&gt;&gt; for &amp;'a dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rust_blas/default/trait.Default.html\" title=\"trait rust_blas::default::Default\">Default</a> + <a class=\"trait\" href=\"rust_blas/matrix/ops/trait.Gemm.html\" title=\"trait rust_blas::matrix::ops::Gemm\">Gemm</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::matrix::Matrix"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"enum\" href=\"rust_blas/math/enum.Trans.html\" title=\"enum rust_blas::math::Trans\">Trans</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; + 'a)&gt;&gt; for <a class=\"enum\" href=\"rust_blas/math/enum.Trans.html\" title=\"enum rust_blas::math::Trans\">Trans</a>&lt;&amp;'a dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt;&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rust_blas/default/trait.Default.html\" title=\"trait rust_blas::default::Default\">Default</a> + <a class=\"trait\" href=\"rust_blas/matrix/ops/trait.Gemm.html\" title=\"trait rust_blas::matrix::ops::Gemm\">Gemm</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::math::Trans"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;T&gt; + 'a)&gt; for &amp;'a dyn <a class=\"trait\" href=\"rust_blas/matrix/trait.Matrix.html\" title=\"trait rust_blas::matrix::Matrix\">Matrix</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rust_blas/default/trait.Default.html\" title=\"trait rust_blas::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_blas/matrix_vector/ops/trait.Gemv.html\" title=\"trait rust_blas::matrix_vector::ops::Gemv\">Gemv</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::matrix::Matrix"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"enum\" href=\"rust_blas/math/enum.Trans.html\" title=\"enum rust_blas::math::Trans\">Trans</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;T&gt; + 'a)&gt;&gt; for &amp;'a dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"rust_blas/default/trait.Default.html\" title=\"trait rust_blas::default::Default\">Default</a> + <a class=\"trait\" href=\"rust_blas/matrix_vector/ops/trait.Ger.html\" title=\"trait rust_blas::matrix_vector::ops::Ger\">Ger</a> + <a class=\"trait\" href=\"rust_blas/matrix_vector/ops/trait.Gerc.html\" title=\"trait rust_blas::matrix_vector::ops::Gerc\">Gerc</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::vector::Vector"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;T&gt; + 'a)&gt; for <a class=\"enum\" href=\"rust_blas/math/enum.Trans.html\" title=\"enum rust_blas::math::Trans\">Trans</a>&lt;&amp;'a dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;T&gt;&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"rust_blas/vector/ops/trait.Copy.html\" title=\"trait rust_blas::vector::ops::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_blas/vector/ops/trait.Dot.html\" title=\"trait rust_blas::vector::ops::Dot\">Dot</a> + <a class=\"trait\" href=\"rust_blas/vector/ops/trait.Dotc.html\" title=\"trait rust_blas::vector::ops::Dotc\">Dotc</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::math::Trans"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt; for &amp;'a dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"rust_blas/vector/ops/trait.Copy.html\" title=\"trait rust_blas::vector::ops::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_blas/vector/ops/trait.Scal.html\" title=\"trait rust_blas::vector::ops::Scal\">Scal</a>,&nbsp;</span>","synthetic":false,"types":["rust_blas::vector::Vector"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt; + 'a)&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + 'a)&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;<a class=\"struct\" href=\"https://docs.rs/num-complex/0.4/num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>&gt;&gt; + 'a)&gt; for <a class=\"type\" href=\"https://docs.rs/num-complex/0.4/num_complex/type.Complex32.html\" title=\"type num_complex::Complex32\">Complex32</a>","synthetic":false,"types":["num_complex::Complex32"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'a (dyn <a class=\"trait\" href=\"rust_blas/vector/trait.Vector.html\" title=\"trait rust_blas::vector::Vector\">Vector</a>&lt;<a class=\"struct\" href=\"https://docs.rs/num-complex/0.4/num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;&gt; + 'a)&gt; for <a class=\"type\" href=\"https://docs.rs/num-complex/0.4/num_complex/type.Complex64.html\" title=\"type num_complex::Complex64\">Complex64</a>","synthetic":false,"types":["num_complex::Complex64"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()