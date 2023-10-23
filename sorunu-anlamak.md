# Sorunu Anlamak:
1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir? 
Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.
* Kullanıcı 1 butonuna tıkadı.
  
* 1 butonuna tıklama olayı tetiklenir ve onClickHandler işlevi çalışır. Bu işlev, dispatchState({ type: "APPLY_NUMBER", payload: e.target.value }) kodunu çağırır.

* dispatchState tarafından tetiklenen reducer işlevi çalışır.

* reducer işlevi, APPLY_NUMBER işlem türünü kontrol eder ve calculateResult fonksiyonunu kullanarak mevcut toplam değeri (state.total) ve 1 (kullanıcının tıkladığı değer) ile çarpar.

* Yeni hesaplanmış değer, total alanı üzerine eklenmiş bir kopya durumu ile birlikte döner.

* Yeni durumun dönüşü, state değişkenini günceller ve bu yeni durum, uygulamanın yeniden render edilmesini tetikler.

* TotalDisplay bileşeni, güncellenen total değerini alır ve bu değeri kullanarak kendini yeniden render eder.

* TotalDisplay total artı 1'i gösterdi.
