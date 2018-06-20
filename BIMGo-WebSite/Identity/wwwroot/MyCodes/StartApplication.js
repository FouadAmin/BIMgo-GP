switch (WebSiteNewFolder) {
    case 0://open old file
        var fullPath = WebSiteFilePath + WebSiteFileName;
        GetBimModelListedFromFullPath(fullPath);

        break;
    case 1://open new file
        OpenNewFile();
        break;

    default:
        break;
}

