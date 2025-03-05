

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

GRANT EXECUTE ON [ext].[KREDeleteItemBarcode] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KREDeleteItemBarcode] TO [PublishersRole];
GO

GRANT EXECUTE ON [ext].[KREDeleteItemBarcode] TO [DeployExtensibilityRole];
GO

