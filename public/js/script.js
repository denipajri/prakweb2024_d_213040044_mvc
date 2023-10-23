$function() 
{
    $(".tombolTambahData").on("click", function()
    {
        $("#fromModalLabel").html("Tambah Data Mahasiswa");
        $(".modal-footer button[type=submit").html("Tambah Data");
    });

    $(".tampilModalUbah").on("click", function()
    {
        $("#fromModalLabel").html("Ubah Data Mahasiswa");
        $(".modal-footer button[type=submit]").html("Ubah Data");
        $(".modal-body form").attr(
            "action",
            "http://localhost/phpmvc/public/mahasiswa/ubah"
        );
    }
    );

    const id = $(this).data("id");

    $ajax(
        {
        url: "http://localhost/phpmvc/public/mahasiswa/getUbah",
        data: {id: id},
        method: "post",
        dataType: "json",
        success: function(data)
        {
            $("#id").val(data.id);
            $("#nama").val(data.nama);
            $("#nrp").val(data.nrp);
            $("#eamil").val(data.email);
            $("#jurusan").val(data.jurusan);
        },
    }
    );
};