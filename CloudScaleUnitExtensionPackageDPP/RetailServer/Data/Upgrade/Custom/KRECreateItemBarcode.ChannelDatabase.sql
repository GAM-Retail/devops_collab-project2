IF OBJECT_ID(N'[ext].[KRECreateItemBarcodeInsert]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KRECreateItemBarcodeInsert]
GO
CREATE PROCEDURE [ext].[KRECreateItemBarcodeInsert]
    @recid    bigint,
    @barcodeSetupid   NVARCHAR(64),
    @Description  NVARCHAR(60), 
    @inventdim NVARCHAR(60), 
    @itembarcode  NVARCHAR(64), 
    @itemid  NVARCHAR(64), 
    @qty  numeric(32,16),
    @reatilshowitem int,
    @retailvalriantid NVARCHAR(10),
    @unitid NVARCHAR(10),
    @useforinput int,
    @useforprinting int ,
	@dataareaid NVARCHAR(4)
AS
BEGIN
    SET NOCOUNT ON

    INSERT INTO
         ax.INVENTITEMBARCODE
        (RECID ,BARCODESETUPID ,DESCRIPTION ,INVENTDIMID ,ITEMBARCODE ,ITEMID ,QTY ,RETAILSHOWFORITEM ,RETAILVARIANTID ,UNITID, USEFORINPUT, USEFORPRINTING ,DATAAREAID)
    OUTPUT
        INSERTED.BARCODESETUPID
    VALUES
        (@recid,  @barcodeSetupid, @Description, @inventdim, @itembarcode, @itemid, @qty, @reatilshowitem, @retailvalriantid, @unitid, @useforinput, @useforprinting, @dataareaid)
END;
GO

GRANT EXECUTE ON [ext].[KRECreateItemBarcodeInsert] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KRECreateItemBarcodeInsert] TO [DeployExtensibilityRole];
GO


IF OBJECT_ID(N'[ext].[KREDeleteItemBarcode]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREDeleteItemBarcode]
GO

CREATE PROCEDURE [ext].[KREDeleteItemBarcode]
    @itembarcode           NVARCHAR(60)
AS
BEGIN
    SET NOCOUNT ON

     DELETE FROM
        AX.INVENTITEMBARCODE
    WHERE
       ITEMBARCODE = @itembarcode
END;
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[AX].[INVENTITEMBARCODE] TO [UsersRole]
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[AX].[INVENTITEMBARCODE] TO [DeployExtensibilityRole]
GO

--Stored procedures:

GRANT EXECUTE ON [ext].[KREDeleteItemBarcode] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KREDeleteItemBarcode] TO [PublishersRole];
GO

GRANT EXECUTE ON [ext].[KREDeleteItemBarcode] TO [DeployExtensibilityRole];
GO



IF OBJECT_ID(N'[ext].[KREUpdateItemBarcode]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREUpdateItemBarcode]
GO

CREATE PROCEDURE [ext].[KREUpdateItemBarcode]
    @itembarcode        NVARCHAR(60),
    @newItembarcode     NVARCHAR(60)
AS
BEGIN
    SET NOCOUNT ON

    UPDATE
        AX.INVENTITEMBARCODE
    SET
        ITEMBARCODE = @newItembarcode
        WHERE
        ITEMBARCODE = @itembarcode
END;
GO

GRANT EXECUTE ON [ext].[KREUpdateItemBarcode] TO [UsersRole];
GO
GRANT EXECUTE ON [ext].[KREDeleteItemBarcode] TO [PublishersRole];
GO
GRANT EXECUTE ON [ext].[KREUpdateItemBarcode] TO [DeployExtensibilityRole];
GO